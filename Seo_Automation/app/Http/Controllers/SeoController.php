<?php

namespace App\Http\Controllers;

use App\Models\Video;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

// Use Model
use App\Models\Url;
use App\Models\Link;
use App\Models\Image;

class SeoController extends Controller
{
    function check(Request $request)
    {
        $infos = [];
        $info = [];

        $url = $request->input('input-url');
        $check_url_status = $this->check_url($url);
        if ($check_url_status == '200') {
            $guzzle = new Client();

            if (
                $checkRecord = Url::query()
                    ->where('path', $url)
                    ->first()
            ) {
                $infos[] = $info = [
                    'url' => $checkRecord->path,
                    'status' => $checkRecord->https_status_code,
                    'title' => $checkRecord->title,
                    'meta-description' => $checkRecord->meta_description,
                    'canonical' => $checkRecord->canonical,
                    'links' => $checkRecord->links->pluck('path')->all(),
                    'images' => $checkRecord->images->pluck('path')->all(),
                    'videos' => $checkRecord->videos->pluck('path')->all(),
                ];
            } else {
                try {
                    $response = $guzzle->request('GET', $url);
                } catch (ClientException $e) {
                    echo $e;
                }

                $infos[] = $info = $this->crawl($response->getBody(), $response->getStatusCode(), $url);
                $this->create_record($info);
            }

//            foreach ($info['links'] as $link) {
//                try {
//                    $response2 = $guzzle->request('GET', $link);
//                } catch (ClientException $e) {
//
//                }
//
//                $test = $this->crawl($response2->getBody(), $response2->getStatusCode(), $link);
//            }
//            dd($test);

            return view('site-info', ['infos' => $infos]);
        } else {
            return redirect()->route('home')->with('error', 'url نا معتبر است');
        }
    }

    public function crawl($body, $status, $url)
    {
        $urlInfo = [];
        $guzzle = new Client();

        $crawl = new Crawler($body, $url);
        $urlInfo['url'] = $url;
        $urlInfo['status'] = $status;

        $urlInfo['links'] = [];
        foreach ($crawl->filter('body a')->links() as $link) {
            if (!in_array($link->getUri(), $urlInfo['links'])) {
                $urlInfo['links'][] = $link->getUri();
            }
        }

        $urlInfo['images'] = [];
        foreach ($crawl->filter('body img')->images() as $image) {
            $urlInfo['images'][] = $image->getUri();
        }

        $urlInfo['videos'] = [];
        foreach ($crawl->filter('body video')->extract(['src']) as $video) {
            $urlInfo['videos'][] = $video;
        }

        $urlInfo['title'] =
            $crawl
                ->filter('head > title')
                ->first()
                ->innerText() ?? null;
        $urlInfo['meta-description'] = $crawl->filter('head > meta[name = "description"]')->extract(['content'])[0] ?? null;
        $urlInfo['canonical'] = $crawl->filter('head > link[rel = "canonical"]')->extract(['href'])[0] ?? null;
        return $urlInfo;
    }

    public function create_record($info)
    {
        $url = Url::query()->create([
            'path' => $info['url'],
            'http_status_code' => $info['status'],
            'title' => $info['title'],
            'meta_description' => $info['meta-description'],
            'canonical' => $info['canonical'],
        ]);

        Image::query()->insert(
            collect($info['images'])
                ->map(fn($path) => ['path' => $path, 'url_id' => $url->id])
                ->all()
        );

        Link::query()->insert(
            collect($info['links'])
                ->map(fn($path) => ['path' => $path, 'http_status_code' => 200, 'url_id' => $url->id])
                ->all()
        );

        Video::query()->insert(
            collect($info['videos'])
                ->map(fn($path) => ['path' => $path, 'url_id' => $url->id])
                ->all()
        );
    }

    function check_url($url)
    {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($ch);
        $headers = curl_getinfo($ch);
        curl_close($ch);

        return $headers['http_code'];
    }
}

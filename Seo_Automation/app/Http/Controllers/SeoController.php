<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\DomCrawler\Link;
use Symfony\Component\DomCrawler\Image;

class SeoController extends Controller
{
    function check(Request $request)
    {
        $infos = [];

        $url = $request->input('input-url');
        if (strstr($url, 'https://')) {
            $url = substr($url, 8);
        }
        if (!strstr($url, 'http://')) {
            $url = 'http://' . $url;
        }

        $guzzle = new Client();

        $response = $guzzle->request('GET', $url);
        $infos[] = $this->crawl($response->getBody(), $response->getStatusCode(), $url);
        return view('siteinfo', ['infos' => $infos]);
    }

    function crawl($body, $status, $url)
    {
        $urlInfo = [];

        $crawl = new Crawler($body, $url);

        $url = substr($url, 7);
        $urlInfo['url'] = $url;
        $urlInfo['status'] = $status;

        $urlInfo['links'] = [];
        foreach ($crawl->filter('body a')->extract(['_text', 'href']) as $link) {
            if ($link[1] !== "") {
                $urlInfo['links'][] = $link;
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

        $urlInfo['scripts'] = [];
        foreach ($crawl->filter('script')->extract(['src']) as $script) {
            $urlInfo['scripts'][] = $script;
        }

        $urlInfo['styles'] = [];
        foreach ($crawl->filter('head > link[rel = "stylesheet"]')->extract(['href']) as $style) {
            $urlInfo['styles'][] = $style;
        }

        $urlInfo['heading'] = [];
        foreach ($crawl->filter('body h1, h2')->extract(['_text']) as $h1) {
            $urlInfo['heading'][] = $h1;
        }
        dd($urlInfo['heading']);

        $urlInfo['title'] = $crawl->filter('head > title')->first()->innerText() ?? null;
        $urlInfo['meta-description'] = $crawl->filter('head > meta[name = "description"]')->extract(['content'])[0] ?? null;
        $urlInfo['canonical'] = $crawl->filter('head > link[rel = "canonical"]')->extract(['href'])[0] ?? null;
        return $urlInfo;
    }
}

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
        return view('site-info', ['infos' => $infos]);
    }


    function crawl($body, $status, $url)
    {
        $urlInfo = [];
        $guzzle = new Client();

        $crawl = new Crawler($body, $url);
        $urlInfo['url'] = $url;
        $urlInfo['status'] = $status;

        $urlInfo['links'] = [];
        foreach ($crawl->filter('body a')->links() as $link) {
            $urlInfo['links'][] = $link->getUri();
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
}

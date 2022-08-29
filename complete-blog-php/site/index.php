<?php

require_once "./includes/header.php";
require_once "../lib/php/autoload.php";

$DB = new DB();
$Msg = new Msg();

$get_posts = $DB->prepare("SELECT * FROM posts");
if (!$get_posts->execute()) {
    print_r($get_posts->errorInfo());
    exit;
}
$listPosts = $get_posts->fetchAll();
?>
<div class="latest-posts">
    <div class="container-fluid">
        <div class="blog-title">
            <span>اخبار و مقالات</span>
        </div>
        <?php foreach ($listPosts as $post) { ?>
            <div class="col-md-3">
                <div class="post-box">
                    <a href="single.php?id=<?= $post->id ?>">
                        <figure>
                            <img src="../assets/images/<?= $post->image ?>"
                                 alt="">
                            <figcaption class="meta-fig">
                                <span><i class="fa-solid fa-clock"></i><?= $post->created_at ?></span>&nbsp;
                                <span><i class="fa-solid fa-comment"></i> 12</span>
                            </figcaption>
                            <figcaption class="view">
                                <span>بخش ویژه</span>
                                <span>انجمن</span>
                                <span>اتاق خبر</span>
                            </figcaption>
                        </figure>
                    </a>
                    <div class="text-p">
                        <a href="#">
                            <h5><?= $post->title ?></h5>
                            <p><?= $post->description ?></p>
                        </a>
                        <div class="text-rigt"><a href="#">
                            </a><a href="single.php?id=<?= $post->id ?>">ادامه ...</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</div>
</body>
</html>
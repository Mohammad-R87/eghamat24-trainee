<?php

require_once "includes/header.php";
require_once "../lib/php/autoload.php";

$DB = new DB();
$Msg = new Msg();

if (!empty($_GET['id'])) {
    $id = $_GET['id'];
    if (!is_numeric($id)) {
        exit("خطا اطلاعات ارسالی نامعتبر است");
    }

    $stmt = $DB->prepare("SELECT * FROM posts WHERE id=:id");
    $stmt->bindValue(":id", $id);
    $stmt->execute();
    $post = $stmt->fetch();
}
?>
<div class="single_post">
    <div class="container-fluid">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="post_img">
                        <img src="../assets/images/<?= $post->image ?>" alt="">
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="posts_meta text-center">
                <span><i class="fa fa-comment-o"></i> 25 نظر</span>
                <span><i class="fa fa-archive"></i> اقتصادی</span>
                <span><i class="fa fa-calendar"></i><?= $post->created_at ?></span>
            </div>
            <div class="post_content">
                <h2><?= $post->title ?></h2>
                <img src="../assets/images/<?= $post->image ?>" alt="">
                <p><?= $post->description ?></p>
            </div>
        </div>
    </div>
</div>
<?php
require_once "../lib/php/autoload.php";
$Msg = new Msg();
$DB = new DB();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>پست ها</title>
    <link rel="stylesheet" href="../lib/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body>
<?php require_once 'header.php' ?>

<?php
$get_posts = $DB->prepare("SELECT * FROM posts");
if (!$get_posts->execute()) {
    print_r($get_posts->errorInfo());
    exit;
}
$listPosts = $get_posts->fetchAll();
?>
<section>
    <?= $Msg->show(); ?>
    <div class="card card-primary w-100">
        <div class="card-header"><h4>لیست پست ها</h4></div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th>کد</th>
                    <th>عنوان</th>
                    <th>شرح</th>
                    <th>تصویر</th>
                    <th>تاریخ ساخت</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($listPosts as $post) { ?>
                    <tr>
                        <td><?= $post->id ?></td>
                        <td><p><?= $post->title ?></p></td>
                        <td><p><?= $post->description ?></p></td>
                        <td><?= $post->image ?></td>
                        <td><?= $post->created_at ?></td>
                        <td>
                            <a href="deletePost.php?id=<?= $post->id ?>" class="trash"><i class="fa-solid fa-trash"></i></a>
                            <a href="?id=<?= $post->id ?>" class="edit"><i
                                        class="fa-solid fa-pen"></i></a>
                        </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
</section>
</body>
</html>

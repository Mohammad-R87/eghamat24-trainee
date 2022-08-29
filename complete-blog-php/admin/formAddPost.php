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
    <title>افزودن پست</title>
    <link rel="stylesheet" href="../lib/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body>
<?php require_once 'header.php'; ?>
<section>
    <?= $Msg->show(); ?>
    <div class="card card-primary">
        <form action="addUpdatePost.php" method="post" enctype="multipart/form-data">
            <div class="card-header"><h4>افزودن پست</h4></div>
            <div class="card-body">
                <div class="form-group">
                    <label for="title">عنوان</label>
                    <input id="title" type="text" class="form-control" name="title">
                </div>
                <div class="form-group">
                    <label for="description">توضیحات</label>
                    <textarea id="description" class="form-control" name="description" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <label for="image">آپلود عکس</label>
                    <input id="image" type="file" class="form-control" name="image">
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn-primary">
                        ثبت
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>
</body>
</html>
<?php
require_once "../lib/php/autoload.php";
$Msg = new Msg();
$DB = new DB();
$valid = true;

$id = "";
$title = strip_tags($_POST['title']);
$description = $_POST['description'];
$file = $_FILES['image']['name'];

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
if ($_FILES['image']) {
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        echo "The file " . basename($_FILES["fileToUpload"]["name"]) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

if (empty($title)) {
    $Msg->error("لطفا فیلد عنوان را پر کنید");
    $valid = false;
}

if (empty($description)) {
    $Msg->error("لطفا فیلد توضیحات را پر کنید");
    $valid = false;
}

if (empty($file)) {
    $Msg->error("لطفا عکس این پست را آپلود کنید");
    $valid = false;
}

if ($valid == false) {
    header("location:formAddPost.php");
    exit;
}

if ($id != "") {
    $stmt = $DB->prepare("UPDATE `posts` SET `title`=:title, `description`=:description, `image`=:image WHERE id=:id");
    $stmt->bindValue(":title", $title);
    $stmt->bindValue(":description", $description);
    $stmt->bindValue(":image", $file);
} else {
    $date = date('Y-m-d');
    $stmt = $DB->prepare("INSERT INTO posts (title, description, image, created_at) VALUES  (:title, :description, :image, :created_at)");
    $stmt->bindValue(":title", $title);
    $stmt->bindValue(":description", $description);
    $stmt->bindValue(":image", $file);
    $stmt->bindValue(":created_at", $date);
}
$result = $stmt->execute();

if (!$result) {
    print_r($stmt->errorInfo());
    exit;
} else {
    $Msg->success("پست با موفقیت  ثبت شد");
}

header("location:posts.php");
exit;

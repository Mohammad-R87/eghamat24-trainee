<?php
require_once "../lib/php/autoload.php";
$DB = new DB();
$Msg = new Msg();

$id = $_GET['id'];
if (!is_numeric($id)) {
    $Msg->error("id نامعتبر است");
    header("location:posts.php");
    exit;
}


$stmt = $DB->prepare("DELETE FROM posts WHERE id=:id");
$stmt->bindValue(":id", $id);
if (!$stmt->execute()) {
    print_r($stmt->errorInfo());
    exit;
} else {
    $Msg->success("عملیات  حذف با موفقیت انجام  شد");
    header("location:posts.php");
    exit;
}

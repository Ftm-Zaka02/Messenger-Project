<?php

include 'mySQL/connection.php';

$message = $_GET['msg'];
$message = strip_tags(trim($message));

if (!empty($message)) {
    insertData($message);
}

R::close();
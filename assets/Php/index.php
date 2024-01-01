<?php

<<<<<<< HEAD
include 'mySQL/connection.php';

$message = $_GET['msg'];
$message = strip_tags(trim($message));

if (!empty($message)) {
    insertData($message);
}

R::close();
=======
include 'mySQL/connection.php,mySql/insert.php';

$message = $_GET['msg'];

echo $message;

$conn = connect("localhost", "root", "", "chat");

if ($message and $message != "") {
    insertData($conn, $message,'message');
}

$conn->close();
>>>>>>> c367c0b42f3326e8ff7f2c8947428eda56f2cc8b

<?php

include 'mySQL/connection.php,mySql/insert.php';

$message = $_GET['msg'];

echo $message;

$conn = connect("localhost", "root", "", "chat");

if ($message and $message != "") {
    insertData($conn, $message,'message');
}

$conn->close();
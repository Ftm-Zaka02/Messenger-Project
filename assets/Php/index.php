<?php

include 'mySQL/connection.php';

$message = $_GET['msg'];
$message = strip_tags(trim($message));

$conn = connect("localhost", "root", "", "chat");
if (!empty($message)) {
    insertData($conn, $message, 'message');
}

$conn->close();
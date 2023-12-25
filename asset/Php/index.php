<?php
include 'mySQL/connection.php';

$message = $_GET['msg'];

echo $message;


$conn = connect("localhost", "root", "", "chat");

insertData($conn, $message);

$conn->close();


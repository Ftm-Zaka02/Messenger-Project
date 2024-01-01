<?php

<<<<<<< HEAD
require 'rb-mysql.php';
R::setup(
    'mysql:host=localhost;dbname=chat',
    'root',
    ''
);

function getTime()
{
    date_default_timezone_set("Asia/Tehran");
    $time = time();
    return date("h:i:sa", $time);
}

function insertData($data)
{
    $currentTime = getTime();

    $currentTime = getTime();
    $messageTable = R::dispense('message');
    $messageTable->messagetext = $data;
    $messageTable->time = $currentTime;
    $id = R::store($messageTable);

    if (isset($id)) {
        echo "\n New record created successfully";
    }
    R::close();
}

function selectData()
{
    $data = R::getAll('SELECT * FROM message');
    return $data;
    R::close();
=======

function connect($servername, $username, $password, $dbname)
{
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
>>>>>>> c367c0b42f3326e8ff7f2c8947428eda56f2cc8b
}
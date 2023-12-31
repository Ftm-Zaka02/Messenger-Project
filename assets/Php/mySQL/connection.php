<?php


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
}
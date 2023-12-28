<?php

include 'mySQL/connection.php';

$message = $_GET['msg'];

echo $message;

$conn = connect("localhost", "root", "", "chat");

if ($message and $message != "") {
    insertData($conn, $message,'message','messagetext');
}

$conn->close();




// function get_time($time) {
//     $duration = $time / 1000;
//     $hours = floor($duration / 3600);
//     $minutes = floor(($duration / 60) % 60);
//     $seconds = $duration % 60;
//     if ($hours != 0)
//         echo "$hours:$minutes:$seconds";
//     else
//         echo "$minutes:$seconds";
// }

// get_time(time());

// date.timezone ="Asia/Iran";
// echo date('H:i');
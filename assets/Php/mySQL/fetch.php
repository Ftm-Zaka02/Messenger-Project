<?php

include 'connection.php';
$conn = connect("localhost", "root", "", "chat");


$sql = "SELECT textvalue FROM messege";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_all();
    echo json_encode($data);
} else {
    echo "0 results";
}

$conn->close();

<?php

include 'connection.php';

$conn = connect("localhost", "root", "", "chat");

echo json_encode(selectData($conn));

$conn->close();
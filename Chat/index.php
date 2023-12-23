<?php
echo "hi! <br>";

$message = $_GET['msg'];

echo $message;


$servername = "localhost";
$username = "zaka";
$password = "yamira2399";
$dbname = "chat";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO messege (textvalue)
VALUES ('$message')";

if ($conn->query($sql) === TRUE) {
    echo "\n New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

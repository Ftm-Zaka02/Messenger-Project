<?php

include 'connection.php';

$data = selectData();

echo json_encode($data);

exit();
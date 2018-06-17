<?php

date_default_timezone_set('Australia/Melbourne');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hirekoro";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>
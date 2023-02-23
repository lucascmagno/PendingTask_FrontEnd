<?php
DEFINE('USERNAME', 'root');
DEFINE('PASSWORD', '');
function connection(){
  try {
    $conn = new PDO('mysql:host=localhost;dbname=pending_task', USERNAME, PASSWORD);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
      echo 'ERROR: ' . $e->getMessage();
  }
  return $conn;
}
?>
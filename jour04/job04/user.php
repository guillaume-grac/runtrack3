<?php

$pdo = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');

$sql = "SELECT * FROM utilisateurs";

$result = $pdo->prepare($sql);
$result->execute();
$fetch = $result->fetchAll(PDO::FETCH_ASSOC);

//On le met au format json avec cette méthode:
echo json_encode($fetch);

?>
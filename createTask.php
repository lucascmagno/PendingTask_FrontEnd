<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pending_task";

// cria uma nova conexão com o banco de dados usando PDO
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // define o modo de erro PDO como exceção
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


} catch(PDOException $e) {
  echo "Erro ao criar a tarefa: " . $e->getMessage();
}

$id_login = "1";
$task = "Titulo_tarefa";
$subject = "Materia";
$description = "Descricao da tarefa";
$data = "Data de entrega";
$horario = "Hora da entrega";
$priority = "Prioridade da tarefa";

// prepara a instrução INSERT
$sql = "INSERT INTO `pending_task`(`id`, `id_login`, `task`, `subject`, `description`, `data`, `horario`, `priority`) VALUES ('[value-1]','$id_login','$task','$subject','$description','$data','$horario','$priority')";

try{
  $conn->exec($sql);
  echo "Nova tarefa criada com sucesso!";
}catch(PDOException $e){
  echo "Erro ao adicionar nova tarefa: ".$e->getMessage();
}
// fecha a conexão com o banco de dados
$conn = null;
?>

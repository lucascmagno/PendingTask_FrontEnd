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
// prepara a instrução INSERT
$stmt = $conn->prepare("INSERT INTO pending_task (id, id_login, task, subject, description, data, horario, priority)
VALUES ('', '1', :titulo, :materia, :descricao, :data, :horario, :prioridade)");

// atribui valores aos parâmetros da instrução INSERT
$stmt->bindParam(':titulo', $_POST['titulo']);
$stmt->bindParam(':materia', $_POST['materia']);
$stmt->bindParam(':descricao', $_POST['descricao']);
$stmt->bindParam(':data', $_POST['entrega']);
$stmt->bindParam(':horario', $_POST['horario']);
$stmt->bindParam(':prioridade', $_POST['prioridade']);

try{
  $stmt->execute();
  echo "Nova tarefa criada com sucesso!";
}catch(PDOException $e){
  echo "Erro ao adicionar nova tarefa: ".$e->getMessage();
}
// fecha a conexão com o banco de dados
$conn = null;
?>

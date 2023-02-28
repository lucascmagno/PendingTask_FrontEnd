<?php
    //faz a conexao com a base de dados
    include_once('./connection.php');
    $conn = connection();

    //recebe as variaveis passadas pela url
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['password'];

    $sql = "INSERT INTO `login`(`name`, `email_task`, `senha_task`) VALUES ('$nome', '$email', '$senha')";

    print_r($sql);
    try{
        $conn->exec($sql);
        echo "Nova tarefa criada com sucesso!";
    }catch(PDOException $e){
        echo "Erro ao adicionar nova tarefa: ".$e->getMessage();
    }
?>
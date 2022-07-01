<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $celular= $_POST['celular'];
    $idade=$_POST['idade'];
    $genero= $_POST['genero'];
    $atividade = $_POST['atividade'];
    $dias = $_POST['dias'];
    $horario = $_POST['horario'];
    $lugares = $_POST['lugares'];
    $contato = $_POST['Contato'];
  

    //conexão com o database
    $conn =  new mysqli('localhost','root', 'toor ','cadastros');
        if($conn->connect_error){
            echo "$conn-> connect_error";
            die('Connection Failed : '. $conn->connect_error);
        }else{
            $stmt = $conn->prepare("insert into registros(nome,email,celular,idade,genero,atividade,dias,horario,lugares,contato)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssssssss", $nome, $email, $celular, $idade, $genero, $atividade, $dias, $horario, $lugares, $contato);
            $execval = $stmt->execute();
           echo $execval;
            echo "Seus dados foram salvos com sucesso, muito obrigado pela sua ajuda.";
            $stmt->close();
            $conn->close();

        }
?>
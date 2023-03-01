function createTask() {
    const titulo = document.getElementById('titulo').value;
    const materia = document.getElementById('materia').value;
    const descricao = document.getElementById('descricao').value;
    const entrega = document.getElementById('entrega').value;
    const horario = document.getElementById('horario').value;
    const prioridade = document.getElementById('prioridade').value;

    // cria um objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // define a função de callback para lidar com a resposta do servidor
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    // define o método HTTP e o arquivo PHP de destino
    xhr.open('POST', '../../createTask.php', true);

    // define o cabeçalho HTTP necessário para enviar dados do formulário
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // envia os dados do formulário como uma string codificada
    const params = `titulo=${titulo}&materia=${materia}&descricao=${descricao}&data=${entrega}&horario=${horario}&prioridade=${prioridade}`;
    xhr.send(params);
}

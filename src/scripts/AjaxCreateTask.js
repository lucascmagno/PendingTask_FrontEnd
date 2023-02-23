// recupera os elementos do formulário
function createTask(){
    var form = document.querySelector('form');
    var titulo = document.getElementById('titulo').value;
    var materia = document.getElementById('materia').value;
    var descricao = document.getElementById('descricao').value;
    var entrega = document.getElementById('entrega').value;
    var horario = document.getElementById('horario').value;
    var prioridade = document.getElementById('prioridade').value;

    // cria um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // define a função de callback para lidar com a resposta do servidor
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
    };

    // define o método HTTP e o arquivo PHP de destino
    xhr.open('POST', 'createTask.php', true);

    // define o cabeçalho HTTP necessário para enviar dados do formulário
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // envia os dados do formulário como uma string codificada
    xhr.send('titulo=' + encodeURIComponent(titulo) +
            '&materia=' + encodeURIComponent(materia) +
            '&descricao=' + encodeURIComponent(descricao) +
            '&entrega=' + encodeURIComponent(entrega) +
            '&horario=' + encodeURIComponent(horario) +
            '&prioridade=' + encodeURIComponent(prioridade));
}
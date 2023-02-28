function createProfile(){
    const form = document.querySelector('form');
        
    const nome = document.getElementById('inome');
    const email = document.getElementById('iemail');
    const senha = document.getElementById('password');
    // Adiciona o evento de submit ao formulário
    if(form.addEventListener('submit')){
    
        const xhr = new XMLHttpRequest();
    
        // define a função de callback para lidar com a resposta do servidor
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
    
        // define o método HTTP e o arquivo PHP de destino    
        // define o cabeçalho HTTP necessário para enviar dados do formulário
        xhr.open('POST', 'CreateProfile.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        // envia os dados do formulário como uma string codificada
        const params = `nome=${nome}&email=${email}&senha=${senha}`;
        xhr.send(params);
    }
}
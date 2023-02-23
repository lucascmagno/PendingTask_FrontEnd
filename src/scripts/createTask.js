function createTask() {
    // Obter os valores dos campos de formulário
    const title = document.getElementById("ititulo").value;
    const materia = document.getElementById("imateria").value;
    const descricao = document.getElementById("idescricao").value;
    const data = document.getElementById("idata").value;
    const prioridade = document.getElementById("iprioridade").value;
  
    // Criar um novo elemento de tarefa
    const newTask = document.createElement("div");
    newTask.classList.add("task");
  
    // Adicionar o conteúdo do novo elemento
    newTask.innerHTML = `
      <div class="task-name">
        <span class="task-title">Titulo: ${title}</span>
        <span class="subtitle task-materia">Matéria: ${materia}</span>
        <span>Descrição: ${descricao}</span>
      </div>
      <div id="taskDate" style="display: flex; align-items: center;">
        <span class="subtitle task-date">${data}</span>
        <span class="priority ${prioridade.toLowerCase()} intermediario"></span>
      </div>
    `;
  
    // Adicionar o novo elemento de tarefa à seção de tarefas criadas
    const taskContent = document.getElementById("taskContent");
    taskContent.appendChild(newTask);
  
    // Enviar os dados da nova tarefa para o servidor
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("POST", "backend.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    const params = `title=${title}&materia=${materia}&descricao=${descricao}&data=${data}&prioridade=${prioridade}`;
    xhttp.send(params);
  }
  
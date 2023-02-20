function createTask() {
    // Obter os valores dos campos de formulário
    const title = document.getElementById("ititulo").value;
    const materia = document.getElementById("imateria").value;
    const descricao = document.getElementById("idescricao").value;
    const data = document.getElementById("idata").value;
    const prioridade = document.getElementById("iprioridade").value;
  
    // Criar um objeto com os dados da tarefa
    const task = {
      title: title,
      materia: materia,
      descricao: descricao,
      data: data,
      prioridade: prioridade
    };
  
    // Enviar a tarefa para o servidor usando AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/tasks", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Se a resposta do servidor for 200 (OK), a tarefa foi criada com sucesso
          const newTask = JSON.parse(xhr.responseText);
          // Criar um novo elemento de tarefa
          const taskDiv = document.createElement("div");
          taskDiv.classList.add("task");
          // Adicionar o conteúdo do novo elemento
          taskDiv.innerHTML = `
            <div class="task-name">
              <span class="task-title">${newTask.title}</span>
              <span class="subtitle task-materia">${newTask.materia}</span>
              <span>${newTask.descricao}</span>
            </div>
            <div id="taskDate" style="display: flex; align-items: center;">
              <span class="subtitle task-date">${newTask.data}</span>
              <span class="priority ${newTask.prioridade.toLowerCase()} intermediario"></span>
            </div>
          `;
          // Adicionar o novo elemento de tarefa à seção de tarefas criadas
          const taskContent = document.getElementById("taskContent");
          taskContent.appendChild(taskDiv);
          // Limpar os campos de formulário
          document.getElementById("ititulo").value = "";
          document.getElementById("imateria").value = "";
          document.getElementById("idescricao").value = "";
          document.getElementById("idata").value = "";
          document.getElementById("iprioridade").value = "";
        } else {
          // Se a resposta do servidor não for 200 (OK), exibir uma mensagem de erro
          console.log("Erro ao criar tarefa: " + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(task));
  }
  
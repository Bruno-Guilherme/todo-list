const botaoAdd = document.querySelector("button");

const criarTarefa = () => {
  const tarefaIn = document.querySelector('#tarefa');
  
  if (tarefaIn.value != "") {
    const section = document.querySelector('section');
    const div = document.createElement("div");
    const check = document.createElement("input");
    const tarefaOut = document.createElement("p");
    const editar = document.createElement("button");
    const deletar = document.createElement('button');

    check.setAttribute("style", "type: checkbox; name: check");
    check.type = "checkbox";
    check.name = "check";
    tarefaOut.innerHTML = tarefaIn.value;
    editar.innerText = "Editar";
    editar.setAttribute("type", "button");
    deletar.innerText = "Deletar";
    deletar.setAttribute("type", "button");

    div.appendChild(check)
    div.appendChild(tarefaOut)
    div.appendChild(editar)
    div.appendChild(deletar)
  
    section.appendChild(div)
  } else {
    alert("Digite uma tarefa para salvar.")

  }



};
botaoAdd.addEventListener("click", criarTarefa);

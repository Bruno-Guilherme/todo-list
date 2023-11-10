const botaoAdd = document.querySelector("button");

const criarTarefa = () => {
  const tarefaIn = document.querySelector('#tarefa');
  const section = document.querySelector('section')

  const div = document.createElement("div");
  const check = document.createElement("input");
  const tarefaOut = document.createElement("p");

  check.setAttribute("type", "checkbox") 
  div.appendChild(check)
  tarefaOut.innerHTML = tarefaIn.value
  div.appendChild(tarefaOut)


  section.appendChild(div)



  console.log("Foi")
};
botaoAdd.addEventListener("click", criarTarefa);

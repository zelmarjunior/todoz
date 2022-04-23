let banco = [];

createTask = (description, status) => {
  dataInputDescription = document.querySelector(".input-task").value;

  if (dataInputDescription) {
    if (banco.length === 0) {
      index = 0
    } else {
      index = banco.length

    }
    createdTask = document.createElement("div");

    dataIndex = index;

    createdTask.innerHTML =
      `<div class="card">
        <input  class="card-checkbox" type="checkbox" ${status} data-index=${index}>
        <p class="card-description">${dataInputDescription}</p>
        <img class="card-icon-delete" src="./img/trash.png" alt="Icon Delete (Trash)" data-index=${index}>
      </div>`;
    document.querySelector(".display-tasks").style.display = "block"
    document.querySelector(".display-tasks").appendChild(createdTask);


    banco.push({
      description: dataInputDescription,
      stauts: "",
      index: dataIndex
    });
    console.log(banco);
    console.log(createdTask);

    document.querySelector(".input-task").value = ""
  } else {
    alert('Digite alguma tarefa para cadastrar!')
  }
}

updateDisplayTasks = () => {
  cleanDisplayTasks();
}

cleanDisplayTasks = () => {
  let displayTasks = document.querySelector(".display-tasks");
  while (displayTasks.lastChild) {
    displayTasks.removeChild(displayTasks.lastChild);
  }
}

clickTask = (evento) => {
  const elemento = evento.target;

  if (elemento.className === "card-checkbox") {
    console.log(elemento.checked)
    if (elemento.checked) {
      elemento.parentNode.classList.add('checked-task')
    } else {
      elemento.parentNode.classList.remove('checked-task')
    }
  }
  else if (elemento.className === "card-icon-delete") {
    console.log("Deleta task");
    banco.splice(elemento.dataset.index, 1);
    elemento.parentNode.parentNode.remove();
    index = 0;
    for (const task of banco) {
      banco[index].index = index;
      document.getElementsByClassName('card-icon-delete')[index].dataset.index = index;
      console.log(index)
      index = index + 1;
    }

    if (banco.length == '0') {
      document.querySelector('.display-tasks').style.display = 'none';
    }
    console.log(banco)
    console.log(elemento);

  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".btn-add-task");
    btn.click();
  }
});

document.getElementById("display-tasks").addEventListener("click", clickTask);

updateDisplayTasks();

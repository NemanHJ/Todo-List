const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
   form.addEventListener("submit" , addTodo)
   secondCardBody.addEventListener("click" , dltTodo)
   clearButton.addEventListener("click" , clearAllTodos)
}

function dltTodo(e) {
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        showAlert("success" , "Todo Silindi")
    }
}


function clearAllTodos(e){
 if(confirm("Bütün Todoları Təmizləmək İstədiyinizə Əminsiz?"), e.target.className === "btn btn-dark"){
    todolist.remove();
   }
}


function addTodo(e){
     const newTodo = todoInput.value.trim();

     if(newTodo === ""){
        showAlert("danger" , "Bir Todo Yazın...")
} 
     else { addTodoToUI(newTodo);
        showAlert("success" , "Əlavə edildi.")
    }
     
     e.preventDefault();
}

function showAlert(type , message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function(){
      alert.remove();
    },1000);
}

function addTodoToUI(newTodo){
    const listItem = document.createElement("li");

     // link yaramtaq
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todo lost list item elave etme

    todolist.appendChild(listItem);
    todoInput.value = ""


}
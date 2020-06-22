
let count = -1;//gives each item added a unique id, which is why it's global
let adme = document.getElementById('adme');
let entry = document.querySelector('.entry > input');
//let todoList = [];

class Todo{
  constructor(){
    this.entry = entry.value;
    this.id = count;
    this.tile = document.createElement('div');
    this.tile.setAttribute('class', 'newTodo');
    this.tile.innerHTML = "<span>" + this.entry +"</span>" + "<span><button id = " + this.id + ">Remove Item</button></span>";
    document.body.appendChild(this.tile)
    document.getElementById(this.id).setAttribute('class','button');
  }

  delete(){
    document.body.removeChild(this.tile);
//    todoList[this.id] = null;
  }
}

//add item to list and push list to local storage
function addContainer() {
let todo = new Todo;
count += 1;
let deleteMe = document.getElementById(todo.id);
deleteMe.addEventListener('click',function(){todo.delete();})

//todoList.push(todo);
//setLocalStorage(todoList);
//getList(todoList);
}

adme.addEventListener('click', function(){addContainer();});

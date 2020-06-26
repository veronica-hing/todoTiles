
let count = 0;//gives each item added a unique id, which is why it's global
let adme = document.getElementById('adme');
let entry = document.querySelector('.entry > input');
let clearAll = document.querySelector('.clearAll > button')

class Todo{
  constructor(entry){
    this.entry = entry;
    this.id = count;
    this.tile = document.createElement('div');
    this.tile.setAttribute('class', 'newTodo');
    this.tile.innerHTML = "<div class = 'stuff'><span>" + this.entry +"</span></div>" + "<div class = 'del'><button id = " + this.id + ">Remove Item</button></div><div class='clr'></div>";
    document.getElementById('listArea').appendChild(this.tile)
    document.getElementById(this.id).setAttribute('class','button');
  }

  delete(){
    document.getElementById('listArea').removeChild(this.tile);
    localStorage.removeItem(JSON.stringify(this.id));
  }
}//end Todo Class

//add item as string to list and push todo string to local storage
function addContainer() {
let todo = new Todo(entry.value);
localStorage.setItem(JSON.stringify(todo.id), JSON.stringify(todo));
count += 1;//for next todo item, not current
let deleteMe = document.getElementById(todo.id);
deleteMe.addEventListener('click',function(){todo.delete();});
entry.value = '';
}//end add container

adme.addEventListener('click', function(){addContainer();});

function test(stringy){
  console.log(stringy);
}
//stuff for when page refreshes with tiles remaining on page
const getLocalStorage = function(){
  if(localStorage.length < 1){
    console.log('nothing to regenerate');
  } else {
    var entryList = []; //stores all the entries from localStorage
    for( var i = 0; i < localStorage.length; i++){
      keyName = localStorage.key(i);
      tempEntry = JSON.parse(localStorage.getItem(keyName));
      entryList[i] = tempEntry.entry;
    }//all entries are now in entryList
    localStorage.clear(); //clear storage for ids to work
    for( var i = 0; i < entryList.length; i++){
      entry.value = entryList[i];
      addContainer();
    }//recreate the containers
  }
  entry.value = '';
}
getLocalStorage();

clearAll.addEventListener('click', function(){
  console.log('cleared local storage');
  while(document.getElementById('listArea').hasChildNodes()){
    let temp = document.getElementById('listArea').firstChild
    ;
    document.getElementById('listArea').removeChild(temp);
  }
  localStorage.clear();

});

const clear=document.querySelector(".clear");


const dateElement = document.getElementbyId("date");
let today = new Date();
let options = {weekday:'long',month:'short',day:'numeric'};
dateElement.innerHTML = today.toLocaleDateString ("en-US",options);

const CHECK ="fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE-THROUGH="lineThrough";
const list=document.getElementbyId("list");
list.addEventListener("click", function(event){
  let element = event.target;
  const elementJOB = event.target.attributes.job.value;
  if (elementJOB == "complete"){
    completeToDo (element);
  }
  else if (elementJOB == "delete"){
    removeToDo(element);
  }
  localStorage.setItem("TODO",JSON.stringify(LIST));
});
function (element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE-THROUGH);
  LIST[element.id].done=LIST[element.id].done ? false : true;
}
function addToDO (toDo, id, done){
  if (trash){return;}
  const DONE = done ? CHECK:UNCHECK;
  const LINE = done ? LINE-THROUGH: "";
  const text = `<li class="item">
          <i class="fa fa-circle-thin complete" job="complete" id="${id}"> </i>
          <p class="text ${LINE}"> ${toDo} </p>
          <i class="fa fa-trash-o delete" job="delete" id="${id}"> </i>
        </li>`
  const position="beforeend"
  list.insertAdjacentHTML(position,text);
}
const input=document.getElementbyId("input");
document.addEventListener ("keyup", function(event)){
  if (event.keyCode == 13){
    const toDo = input.value;
    if (toDo){
      addToDO(toDo, id, false, false);
      LIST.push (
      {
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
    
    input.value = "";
    id++;
  }}
}
function removeToDo (element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}
let LIST, id;
let data = localStorage.getItem("TODO");
if (data){
    LIST=JSON.parse(data);
    loadToDO(LIST);
    id = LIST.length;
}
else{
  LIST=[];
  id=0;
}
function loadToDO (array){
  array.forEach(function(item){
    addToDO(item.name, item.id, item.done,item.trash);
  });
  }
  const clear = document.querySelector(".clear");

  clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
  });



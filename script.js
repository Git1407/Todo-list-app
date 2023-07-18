let inputBox = document.getElementById("input-box");
let listcontainer = document.getElementById("listcontainer");
var id = localStorage.getItem('id')
if(!id){
  id = 0;
  localStorage.setItem('id',0)
}
function addTask() {
  let li;
  if (inputBox.value.length <= 1) {
    alert("You must Write something");
  } else {
    id++;
    li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.setAttribute('id','liId-'+id)
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    let img_ = document.createElement("img");
    img_.setAttribute("src", "/img/unchecked.png");
    img_.setAttribute("onclick", "ChangeImg(this)");

    span.setAttribute("onclick", "closeClick(this)");
    span.innerHTML = "\u00d7";
    li.appendChild(img_);
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(li);
  inputBox.setAttribute("placeholder", "Add your task");
  localStorage.setItem('id',id);
}

function closeClick(e) {
  e.parentElement.remove();
  localStorage.removeItem(e.parentElement.getAttribute('id'));
}

function ChangeImg(ev) {
  ev.parentElement.classList.add('line-throw');
  ev.src = "/img/checked.png";
  saveData(ev.parentElement);
}
function saveData(item_1) {
  let LiId = item_1.getAttribute('id');
  localStorage.setItem(LiId, item_1.outerHTML);
}
function showTask() {
  let res = '';
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if(key != 'id'){
      res += localStorage.getItem(key);
    }
  }
  listcontainer.innerHTML = res;
}
showTask();

let  inputBox = document.getElementById("taskInput");
let list = document.getElementById("list-container");

function newElement(){
  if(inputBox.value === ''){
    alert("You must enter something");
  }
  else{
    let li = document.createElement("LI")
    li.innerHTML = inputBox.value;
    list.appendChild(li);

    let span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
   inputBox.value = "";
   saveData();
}
list.addEventListener("click", (action) => {
  if(action.target.tagName === "LI"){
    action.target.classList.toggle("checked");
    saveData();
  }
  else if(action.target.tagName === "SPAN"){
    action.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", list.innerHTML);
}
function showData(){
  list.innerHTML = localStorage.getItem('data');
}
showData();



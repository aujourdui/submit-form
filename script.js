var lastMessage = document.getElementById("last-message");
var btn = document.getElementsByClassName("btn")[0];
var input = document.getElementsByClassName("input")[0];

input.addEventListener("keyup", myFunction);

function myFunction(event){
  if (event.keyCode === 13) {
    btn.click();
  }
};

function buttonCode(){
  lastMessage.style.display = 'block';
  if (input.value == 0) {
    lastMessage.innerHTML = "Please input any information";
    lastMessage.style.color = 'red';
    dissapper();
  }
  else {
    lastMessage.innerHTML = input.value;
    lastMessage.style.color = 'black';
    input.value = "";
  }
};

function dissapper() {
  setTimeout(hideElement, 2000);
  function hideElement() {
  lastMessage.style.display = 'none'
}}
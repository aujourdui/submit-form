var lastMessage = document.getElementById("last-message");
var btn = document.getElementsByClassName("btn")[0];
var input = document.getElementsByClassName("input")[0];

input.addEventListener("keyup", myFunction);

function myFunction(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
};

function buttonCode(){
  if (input.value == 0) {
    lastMessage.innerHTML = "Please input any information";
    dissapper();
    lastMessage.style.display = 'block'
  }
  else {
    lastMessage.innerHTML = input.value;
    input.value = "";
    lastMessage.style.display = 'block'
  }
};

function dissapper() {
  setTimeout(hideElement, 2000);
  function hideElement() {
  lastMessage.style.display = 'none'
}}

/* <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 3000)"></div> */

// lastMessage.innerHTML = "Alert: Last Message Delivered";

// function buttonCode(){
//   if (input.value == "") {
//     lastMessage.innerHTML = input.value;
//     input.value = "";
//   }
//   else {
//     lastMessage.innerHTML = "Last Message Delivered";
//   }
// }
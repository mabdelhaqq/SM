
document.addEventListener("DOMContentLoaded", function() {

let btn1 = document.getElementById("appMenuButton");
let btn2 = document.getElementById("userListButton");
let appMenu = document.querySelector(".app_menu");
let userList = document.querySelector(".user_list");

let notificationsButton = document.getElementById("notificationsButton");
let notificationsDropdown = document.getElementById("notificationsDropdown");

let messagesButton = document.getElementById("messagesButton");
let messagesDropdown = document.getElementById("messagesDropdown");

let requestsButton = document.getElementById("requestsButton");
let requestsDropdown = document.getElementById("requestsDropdown");

let personalButton = document.getElementById("personalButton");
let personalDropdown = document.getElementById("presonalDropdown");

let arrowButton = document.getElementById("arrowButton");
let arrowDropdown = document.getElementById("arrowDropdown");



btn1.addEventListener("click", function() {
    appMenu.classList.toggle("d-none");
  });

  btn2.addEventListener("click", function() {
    userList.classList.toggle("d-none");
  });

  notificationsButton.addEventListener("click", function() {
    notificationsDropdown.classList.toggle("d-none");
});

messagesButton.addEventListener("click", function() {
  messagesDropdown.classList.toggle("d-none");
});

requestsButton.addEventListener("click", function() {
  requestsDropdown.classList.toggle("d-none");
});

personalButton.addEventListener("click", function() {
  personalDropdown.classList.toggle("d-none");
});

arrowButton.addEventListener("click", function() {
  arrowDropdown.classList.toggle("d-none");
});


});


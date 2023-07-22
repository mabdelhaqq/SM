
document.addEventListener("DOMContentLoaded", function() {

let btn1 = document.getElementById("appMenuButton");
const btn2 = document.getElementById("userListButton");
const appMenu = document.querySelector(".app_menu");
const userList = document.querySelector(".user_list");

btn1.addEventListener("click", function() {
    appMenu.classList.toggle("d-none");
  });

  btn2.addEventListener("click", function() {
    userList.classList.toggle("d-none");
  });

});
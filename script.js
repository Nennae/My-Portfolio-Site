
var hamburger = document.querySelector(".fa-bars")
console.log(hamburgaren)
var menu = document.querySelector(".ham-menu")
console.log(meny);
var check = true;

var num = 0;
hamburger.addEventListener('click', ()=>{
num++;
if (num %2 == 1){
      menu.style.display = ("block")
} else {
      menu.style.display = ("none")
}
})
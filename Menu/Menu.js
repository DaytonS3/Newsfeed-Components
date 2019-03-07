
const toggleMenu = function() {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => toggleMenu());


const navI= document.querySelector(".one");
navI.addEventListener('click', function (e){
  navI.classList.toggle('large')
})

const navII= document.querySelector(".two");
navII.addEventListener('click', function (e){
  navII.classList.toggle('large')
})

const navIII= document.querySelector(".three");
navIII.addEventListener('click', function (e){
  navIII.classList.toggle('large')
})

const navIIII= document.querySelector(".four");
navIIII.addEventListener('click', function (e){
  navIIII.classList.toggle('large')
})

const navIIIII= document.querySelector(".five");
navIIIII.addEventListener('click', function (e){
  navIIIII.classList.toggle('large')
})

const navIIIIII= document.querySelector(".six");
navIIIIII.addEventListener('click', function (e){
  navIIIIII.classList.toggle('large')
})


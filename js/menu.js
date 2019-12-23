var body = document.body;
var openMenu = document.querySelector('#open-menu');
var closeMenu = document.querySelector('#close-menu');
var menu = document.querySelector('#menu');
console.log(body);
console.log(closeMenu);
console.log(openMenu);

openMenu.onclick = function openMenu () {
	body.classList.toggle('menu-opened');
	menu.classList.toggle('menu-opened');
}
closeMenu.onclick = function closeMenu () {
	body.classList.toggle('menu-opened');
	menu.classList.toggle('menu-opened');
}
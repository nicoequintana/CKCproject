const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');

function abrirMenu () {
    menu.classList.toggle('show');
    btnMenu.classList.toggle('hamRotate');
}


btnMenu.addEventListener('click', function () {
    abrirMenu()
})
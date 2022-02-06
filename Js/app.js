const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');

function abrirMenu () {
    menu.classList.toggle('show');
}

btnMenu.addEventListener('click', function () {
    abrirMenu()
})
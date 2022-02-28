//loader--------------
window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden')

}

//-------------------------------------------------------

const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const link = document.querySelectorAll('.link')
let menuOpen = false

function abrirMenu () {
    menu.classList.toggle('show');
    btnMenu.classList.toggle('hamRotate');
    menuOpen = true
}
function cerrarMenu(){
    menu.classList.toggle('show')
}

btnMenu.addEventListener('click', function () {
    abrirMenu()
})

link.addEventListener('click', function(){
    if(menuOpen == true){
        abrirMenu()
    }
})

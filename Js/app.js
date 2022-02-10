const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const link = document.querySelectorAll('.link')
const menuOpen = false

function abrirMenu () {
    menu.classList.toggle('show');
    btnMenu.classList.toggle('hamRotate');
}


btnMenu.addEventListener('click', function () {
    abrirMenu()
     menuOpen=true
})

link.addEventListener('click', function(){
    if(menuOpen==true){
        menu.classList.remove('show')
    }
})

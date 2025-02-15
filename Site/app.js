function msg(){
    alert("Bienvenido 🤍")
}

// Crear la funcion para visualizar el formulario

function ver(id){
// apliquemos metodos
document.getElementById(id).style.display = "block"

}

//creamos la funcion ocultar

function ocultar(id){
    document.getElementById(id).style.display = "none"
}

//creamos la funcion para visualixar el boton up

//guardamos la ubicacion exacta del boton up

let up = document.querySelector('#up')

window.addEventListener('scroll',btn_up)

function btn_up(){
    if(window.scrollY > 200){
        console.log('%c Estas ubicado por encima de los 200px','background-color: aqua;color=brown')
        up.classList.add('activar');
    }else{
        up.classList.remove('activar')
    }

}

up.classList.add('activar');
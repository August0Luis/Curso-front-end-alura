const listaDeTeclas = document.querySelectorAll('.tecla')
listaDeTeclas[0].onclick = tocaSomPom
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play()
}
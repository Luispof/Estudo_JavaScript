function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
    return "Som pom reproduzido"
}

const listaDeTeclas = document.querySelectorAll('.tecla')
listaDeTeclas[0].onclick = tocaSomPom;
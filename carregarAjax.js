const conteudo = document.querySelector('.pagina-conteudo')
const url = './parte.html'

function navegarAjax(url, seletor) {
    if(!url || !seletor) return

    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            seletor.innerHTML = html
        })
}

navegarAjax(url, conteudo)
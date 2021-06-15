function navegarAjax(url, seletor) {
    if(!url || !seletor) return

    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            seletor.innerHTML = html
        })
}

module.exports = { navegarAjax }
// navegarAjax(url, conteudo)
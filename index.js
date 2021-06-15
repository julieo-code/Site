const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./banco')
const { navegarAjax } = require('./carregarAjax')

app.listen(3000, () => {
    console.log('backend executando...')
})

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/login.html", (req, res) => {
    (async () => {
        const dados = await db.validarLogin(req.body.email, req.body.senha)
        if(dados[0].length == 0) {  //Se usuario não tiver cadastro
            console.log('nao')
        } else {
            res.redirect("https://site-red-five.vercel.app/conteudo.html")
            const conteudo = document.querySelector('.ajax')
            const url = './conteudo.html'
            navegarAjax(url, conteudo)
        }
    })()
})

app.post("/cadastro.html", (req, res) => {
    const cadastro = {
        'nome': req.body.nome,
        'senha': req.body.senha, 
        'confirmaSenha': req.body.confirmaSenha,
        'confirmaEmail': req.body.confirmaEmail
    }

    (async () => {
        
    })()
})
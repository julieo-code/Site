async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection
    
    const mysql = require ("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:103190@localhost:3306/banco")
    console.log('Conexão com o MYSQL estabelecida com sucesso!')
    global.connection = connection
    return connection
}
connect()

async function getDados() {
    const conn = await connect()
    const dadosTabela = await conn.query('SELECT * FROM usuario;')
    return dadosTabela
}

async function inserir(email, senha) {
    const conn = await connect()
    const sql = 'INSERT INTO usuario(login, senha) VALUES (?,?)'
    const values = [email,senha]
    await conn.query(sql, values)
}

async function validarLogin(email, senha) {
    const conn = await connect()
    const sql = "SELECT * FROM usuario WHERE usuario.login = ? and usuario.senha = ?;"
    const values = [email, senha]
    return await conn.query(sql, values)
}

module.exports = { getDados, inserir, validarLogin }
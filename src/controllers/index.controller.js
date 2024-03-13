const { Pool } = require('pg');

//conexión a la db
const pool = new Pool({
    user: 'alex',
    password: '',
    host: '127.0.0.1',
    port: '5432',
    database: 'postgres',
})


const getUsers =  async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    console.log(response.rows);
    res.send('users');
}

module.exports = { 
    getUsers,
}
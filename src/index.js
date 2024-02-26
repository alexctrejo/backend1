const express = require('express');
const cors = require('cors');
const {Client} = require('pg');
const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

const client = new Client({
    user: 'alex',
    password: '',
    host: '127.0.0.1',
    port: '5432',
    database: 'postgres',
  });

  // Conectarse a la base de datos
client.connect()
.then(() => {
    console.log('Conexión exitosa a la base de datos');
})
.catch(err => {
    console.error('Error al conectar a la base de datos', err);
});

const obtenerUsuarios = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM usuarios'); // Ejecutar la consulta
        console.log('Query result:', result.rows); // Imprimir el resultado de la consulta
        res.json(result.rows); // Enviar los resultados como JSON al cliente
    } catch (error) {
        console.error('Error executing query', error); // Manejar errores
        res.status(500).send('Error interno del servidor');
    }
};

app.get('/', (req, res) => res.json({msg: 'This is CORS-enabled for all origins!'}))
app.get('/ping', obtenerUsuarios);
app.get('/negocios', (req, res) => 
    res.json([
        {
            "nombre": "Tacos El Castor",
            "tipo": "Taqueria",
            "direccion": "41.40338, 2.17403",
            "descripcion": "los mejores tacos de riata de la ciudad con pitomate",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoVKqgGrrocxUS3gEbcPLD2h0Yu0xGkYQYCAtNVTKKA&s"
        },
        {
            "nombre": "Tacos El Castor",
            "tipo": "Taqueria",
            "direccion": "41.40338, 2.17403",
            "descripcion": "los mejores tacos de riata de la ciudad con pitomate",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoVKqgGrrocxUS3gEbcPLD2h0Yu0xGkYQYCAtNVTKKA&s"
        },
        {
            "nombre": "Tacos El Castor",
            "tipo": "Taqueria",
            "direccion": "41.40338, 2.17403",
            "descripcion": "los mejores tacos de riata de la ciudad con pitomate",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoVKqgGrrocxUS3gEbcPLD2h0Yu0xGkYQYCAtNVTKKA&s"
        },
    ]) 
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
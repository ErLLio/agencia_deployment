const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

require('dotenv').config({path: 'variables.env'});

const configs = require('./config')

// Configuracion Base de datos
// const db = require('./config/database');
// db.authenticate()
//     .then(() => console.log('Base de datos conectada'))
//     .catch((error) => console.log(error));

// Habilitar Pug
app.set('view engine', 'pug');

// Habilitar vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica
app.use(express.static('public'));

// Validar si estamos en desarrolo o en produccion
const config = configs[app.get('env')];

// Creamos variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});

app.use(bodyParser.urlencoded({extended: true}));

// Rutas
app.use('/', routes());

// Inicio de servidor
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log(`Servidor iniciado en: http://${host}:${port}`));

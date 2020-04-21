const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotros.controller');
const homeController = require('../controllers/home.controller');
const viajesController = require('../controllers/viajes.controller');
const testimonialesController = require('../controllers/testimoniales.controller');

module.exports = function () {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.mostrarTestimonial);

    return router;
}
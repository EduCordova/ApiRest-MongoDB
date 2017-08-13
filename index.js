'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001


mongoose.connect('mongodb://localhost:27017/shop',{ useMongoClient: true }, (err, res) => {
    if (err) {
        return console.log('error al conectarse A la DB')
    } else {
        console.log('Conexion Establecida!!')
    }

    app.listen(port, () => {
        console.log('Api rest puerto ::: ' + port);
    });

})


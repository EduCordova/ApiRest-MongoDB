'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001


mongoose.connect('mongodb://adminapi:123456@ds155841.mlab.com:55841/shop',{ useMongoClient: true }, (err, res) => {
    if (err) {
        return console.log('error al conectarse A la DB')
    } else {
        console.log('Conexion Establecida!!')
    }

    app.listen(port, () => {
        console.log('Api rest puerto ::: ' + port);
    });

})


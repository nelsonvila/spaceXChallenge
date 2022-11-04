const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
const launches = require("./routes/launches");
app.set('json spaces', 2)

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/launches", launches);

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

module.exports = app
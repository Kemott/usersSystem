const express = require('express');
const config = require('./config.js');
const bodyParser = require('body-parser');
const middlewares = require('./middleware.js');
const mail_handlers = require('./handlers/mail');
const error_handlers = require('./handlers/errors');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

/**
 * Wysyłka maili
 */
app.post('/mail', 
    middlewares.checkParams, 
    middlewares.checkEmail, 
    middlewares.checkSubject, 
    mail_handlers.sendMail
    );

/**
 * W przypadku błędów
 */

app.use(error_handlers.err_404);

app.use(error_handlers.err_500);

/**
 * Start serwera
 */

app.listen(port, () => {
    console.log(`Serwer uruchomiony. Nasłuchuje na porcie ${port}`);
});
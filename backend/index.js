const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

let PORT = process.env.PORT || 4000;

app.listen( 4000 , () => {
    console.log('listening on port...' , PORTt);
});

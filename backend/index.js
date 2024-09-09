const express = require('express');
const app = express();
const cors = require('cors');
const newsRouter = require('./router/backendRouter')
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin : "*" 
}))
let PORT = process.env.PORT || 4000;


app.use('/api/v1/' , newsRouter);
app.listen( 4000 , () => {
    console.log('listening on port...' , PORT);
});

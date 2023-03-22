const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors())
require('dotenv').config({ path: "./config.env"});
const PORT = process.env.PORT  ;


require('./db/db.js');



const router = require('./routes/router.js');
app.use(router)



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))




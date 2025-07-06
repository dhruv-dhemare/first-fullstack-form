const express = require('express');
const cors = require('cors');
const app = express();
const bd =require('./db');
app.use(express.json());
require('dotenv').config();

app.use(cors());

const formRoutes = require('./routes/formRouter');
app.use('/api/form', formRoutes);

app.listen(process.env.PORT || 5000,()=>{
    console.log("listening on port : 5000");
    console.log("Server is running on http://localhost:5000");

})
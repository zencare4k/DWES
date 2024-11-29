const express = require('express');
const server = require ("./loaders/server");
const accessRoutes = require("./routes/accessRoutes");

const app = express();

app.use(express.json());

app.use('/', accessRoutes)

server(app);
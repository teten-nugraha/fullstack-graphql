const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const app = express();

app.use(bodyParser.json());

// untuk graphql hanya menggunakan 1 endpoint
app.use('/graphql');

app.listen(4000);
const express = require('express');
const app = express();
const path = require('path');


/* we just need to allow CORS by setting the header of response here */

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname + '/posts.json'));
})

app.listen(8080, () => {
    console.log("server running on 8080");
})
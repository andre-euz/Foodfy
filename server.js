const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = ('./data');

server.use(express.static('public'))

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    return res.render("index", { recipes });
});

server.listen(5000, function() {
    console.log("server is running");
})
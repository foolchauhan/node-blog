// Setup
var express = require('express');
var app = express();
// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})

app.get("/", (req, res) => {
    res.render('index', {title: "Chetan's Blog"});
 });

 app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    res.render('blog', {title: "Chetan's Blog"});
});
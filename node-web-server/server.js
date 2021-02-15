const express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

//GET homepage
app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/process_get', (req,res)=>{
    // Prepare output in JSON format
   response = {
     first_name:req.query.first_name,
     last_name:req.query.last_name
    };
    console.log(response)
    res.end(JSON.stringify(response));
});
// url encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/process_post',urlencodedParser, (req,res)=>{
    // Prepare output in JSON format
   response = {
     first_name:req.body.first_name,
     last_name:req.body.last_name
    };
    console.log(response)
    res.end(JSON.stringify(response));
});
var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});


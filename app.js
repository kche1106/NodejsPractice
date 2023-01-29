var express = require('express');
var app = express();  //application을 return
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/template', function(req, res) {
    res.render('temp', {time:Date(), _title:'Jade'});
})

app.get('/', function(req, res) {  //홈페이지 접속을 했을 때
    res.send('Hello home page');
}); 

app.get('/dynamic', function(req, res) {

    var lis = '';
    for(var i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }

    var output = `
        <html>
            <head>
                <meta charset="utf-8">
                <title></title>
            </head>
            <body>
                Hello, dynamic
                ${lis}
            </body>
        </html>
    `;
    res.send(output);
})

app.get('/route', function(req, res) {
    res.send('Hello router, <img src="/rabbit.jpeg">')
})

app.get('/login', function(req, res) {
    res.send('Login please');
});

app.listen(8080, function() {  
    console.log('Connected 8080 port');
}); 

/**
 * Created by Apple on 16/11/11.
 */

var http = require('http');
var connect = require('connect');
var parseUrl = require('url').parse;

var DATA = {
    1: '<h1>1111111</h1>',
    2: '<h1>2222222</h1>',
    3: '<h1>3333333</h1>',
    4: '<h1>4444444</h1>'
};

function getNews(id) {
    return DATA[id] || '不存在';
};

var app = connect();


app.use(function (req, res, next) {
    res.send = function send(html) {
        res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
        res.end(html);
    };
    next();
});


app.use(function (req, res, next) {
    var info = parseUrl(req.url,true);
    console.log(info);
    req.pathname = info.pathname;
    req.query = info.query;
    next();
});

app.use(function (req, res, next) {
    if (req.pathname === '/') {
        res.send('<ul>' +
            '<li><a href="/item?cat=1&id=1">111</a> </li>' +
            '<li><a href="/item?cat=1&id=2">222</a> </li>' +
            '<li><a href="/item?cat=1&id=3">333</a> </li>' +
            '<li><a href="/item?cat=1&id=4">444</a> </li>' +
            '</ul>');
    } else {
        next();
    }

});

app.use(function (req, res, next) {
    console.log(req.query);
    if (req.pathname === '/item' && req.query.cat === '1'){
        console.log(req.query.id);
        res.send(getNews(req.query.id));
    }else {
        next();
    }
});

var server = http.createServer(app);

server.listen(3001);
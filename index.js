var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

socketio.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
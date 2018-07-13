const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  serveClient: true
});
app.use(express.static(path.join(__dirname, 'public')));


const songArray = [
  'https://www.youtube.com/watch?v=LODkVkpaVQA',
  'https://www.youtube.com/watch?v=tbNlMtqrYS0',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
];

app.get('/person/:name', (req, res) => {
  res.status(200).json({name: req.params.name});
});

io.on('connection', function (socket) {
  setInterval(function() {
    let song = songArray[Math.floor(Math.random() * songArray.length)];
    const myRegexp = /v=.*/ig;
    let match = myRegexp.exec(song);
    match[0] = match[0].replace('v=', '');
    socket.emit('song', {id: match[0]});
  }, 10000);
});






server.listen(process.env.PORT || 3123);
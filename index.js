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

const REFERENCE_FACES = [
  { label: 'Lindsay', image: 'people/Administrative-Lindsay-Clifton.jpg' },
  { label: 'Kevin', image: 'people/Product-Growth-Kevin-James.jpg' },
  { label: 'Magbic', image: 'people/Team-Circle-Magbic-Aleman.jpg' },
  { label: 'Chef', image: 'people/Team-Orange-Michael-Sheftic.jpg' },
  { label: 'Lincoln', image: 'people/Team-Red-Lincoln-Anderson.jpg' },
  { label: 'Eric', image: 'people/DevOps-Eric-Cunningham.jpg' },
  { label: 'Lauren', image: 'people/Product-Growth-Lauren-LeDonne.jpg' },
  { label: 'Scott', image: 'people/Team-Circle-Scott-Fiegelis.jpg' },
  { label: 'Nick', image: 'people/Team-Orange-Nick-Forneris.jpg' },
  { label: 'Peter', image: 'people/Team-Red-Peter-Brownstein.jpg' },
  { label: 'Kierra', image: 'people/Kierra-Greene.jpg' },
  { label: 'Sophie', image: 'people/Product-Growth-Sophie-Loghman.jpg' },
  { label: 'Brad', image: 'people/Team-I-4-Brad-Prymicz-1.jpg' },
  { label: 'Peter_J', image: 'people/Team-Orange-Peter-Juchniewicz.jpg' },
  { label: 'Krissy', image: 'people/Team-UX-Krissy-Scoufis.jpg' },
  { label: 'Brian', image: 'people/Product-Growth-Brian-Russell.jpg' },
  { label: 'Megan', image: 'people/Product-Growth-_-Megan-Hord.jpg' },
  { label: 'Brandon', image: 'people/Team-I-4-Brandon-Mitchell.jpg' },
  { label: 'Brent', image: 'people/Team-Popo-Brent-Walbolt.jpg' },
  { label: 'Michelle', image: 'people/Team-UX-Michelle-Brownstein.jpg' },
  { label: 'Chelsea', image: 'people/Product-Growth-Chelsea-Burns.jpg' },
  { label: 'Rich_G', image: 'people/Rich-Goidel.jpg' },
  { label: 'Rich_B', image: 'people/Team-I-4-Rich-Brookfield.jpg' },
  { label: 'Kayla', image: 'people/Team-Popo-Kayla-Burrell.jpg' },
  { label: 'Jon', image: 'people/Team_Blue_Jon_Pitts-1.jpg' },
  { label: 'Damion', image: 'people/Product-Growth-Damion-Wasylow.jpg' },
  { label: 'Ed', image: 'people/Team-Blue-Ed-Egun.jpg' },
  { label: 'Tim', image: 'people/Team-I-4-Tim-Pratt.jpg' },
  { label: 'Ashish', image: 'people/Team-QA-Ashish-Johri.jpg' },
  { label: 'Eran', image: 'people/eran.jpg' },
  { label: 'Erin', image: 'people/Product-Growth-Erin-Devine-Martin.jpg' },
  { label: 'Paul', image: 'people/Team-Blue-Paul-Traylor.jpg' },
  { label: 'Blake', image: 'people/Team-Orange-Blake-McLeod.jpg' },
  { label: 'Victor', image: 'people/victor.jpg' },
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
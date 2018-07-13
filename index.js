const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  serveClient: true
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let clientSocket;

app.get('/person/:name', (req, res) => {
  clientSocket.emit('song', {
    ...videos[req.params.name],
    label: req.params.name,
  });
  res.status(200).json({success: true});
});

io.on('connection', function (socket) {
  clientSocket = socket;
});






server.listen(process.env.PORT || 3123);

const videos = {
  Erin: {
    id: 'GDpmVUEjagg',
    t: 20,
    name: 'Erin Martin'
  },
  Michelle: {
    id: 'btPJPFnesV4',
    t: 8,
    name: 'Michelle Brownstein'
  },
  Lindsay: {
    id: 'pGL2rytTraA',
    t: 6,
    name: 'Lindsay Clifton'
  },
  Kacie: {
    id: '_ivt_N2Zcts',
    t: 54,
    name: 'Kacie Lett'
  },

  Christa: {
    id: '8OyRL48ADjQ',
    t: 60,
    name: 'Christa Garcia'
  },

  Andi: {
    id: '-uIEORZzFZw',
    t: 61,
    name: 'Andi Freeman',
    new: true
  },

  Chris: {
    id: 'uGcsIdGOuZY',
    t: 36,
    name: 'Chris Burns'
  },

  Sophie: {
    id: 'ZyhrYis509A',
    t: 14,
    name: 'Sophie Loghman'
  },

  Damion: {
    id: 'fPO76Jlnz6c',
    t: 14,
    name: 'Damion Wasylow'
  },

  Robert: {
    id: 'NHozn0YXAeE',
    t: 54,
    name: 'Robert Berris'
  },

  Rich_B: {
    id: 'wv-34w8kGPM',
    t: 8,
    name: 'Richard Brookfield'
  },

  Sarah_B: {
    id: 'fG3ngA0QZzM',
    t: 0,
    name: 'Sarah Barnett',
    new: true
  },

  Lauren: {
    id: 'iEe_eraFWWs',
    t: 14,
    name: 'Lauren LeDonne'
  },

  Chef: {
    id: 'yO2n7QoyieM',
    t: 36,
    name: 'Mike Sheftic'
  },

  Kevin: {
    id: 'nFvRvSxsW-I',
    t: 81,
    name: 'Kevin James'
  },

  Brian: {
    id: 'kyXz6eMCj2k',
    t: 14,
    name: 'Brian Russell'
  },

  Kierra: {
    id: '4QCXr79Rkcw',
    t: 38,
    name: 'Kierra Greene',
    new: true
  },

  Andrea: {
    id: 'tAp9BKosZXs',
    t: 33,
    name: 'Andrea Mausser',
    new: true
  },

  Peter: {
    id: '3gOHvDP_vCs',
    t: 27,
    name: 'Peter Brownstein'
  },

  Geoff: {
    id: 'v2AC41dglnM',
    t: 49,
    name: 'Geoff Wilson'
  },

  Rich_G: {
    id: 'bBR94L1Usgs',
    t: 16,
    name: 'Rich Goidel'
  },

  Brad: {
    id: 'W3q8Od5qJio',
    t: 45,
    name: 'Brad Prymicz'
  },

  Eric: {
    id: 'C-u5WLJ9Yk4',
    u: 22,
    name: 'Eric Cunningham'
  },

  Brandon: {
    id: 'WeYsTmIzjkw',
    t: 40,
    name: 'Brandon Mitchell'
  },

  Logan: {
    id: '7P_9hDzG1i0',
    t: 92,
    name: 'Logan Sobczak',
    new: true
  },

  Blake: {
    id: 'l5aZJBLAu1E',
    t: 56,
    name: 'Blake McLeod'
  },

  Garry: {
    id: 'fNFzfwLM72c',
    t: 0,
    name: 'Garry Guerrier',
    new: true
  },

  Chelsea: {
    id: 'sQgd6MccwZc',
    t: 23,
    name: 'Chelsea Burns'
  },

  Megan: {
    id: 'GGXzlRoNtHU',
    t: 4,
    name: 'Megan Hord'
  },

  Andrew: {
    id: 'y3zEujFbAPs',
    t: 87,
    name: 'Andrew Mimault',
    new: true
  },

  Jeremy: {
    id: 'OoinfsXvfNE',
    t: 18,
    name: 'Jeremy New',
    new: true
  },

  Eran: {
    id: 'QtTR-_Klcq8',
    t: 6,
    name: 'Eran Schoellhorn'
  },

  Magbic: {
    id: '6IJCFc_qkHw',
    t: 0,
    name: 'Magbic Aleman'
  },

  Lincoln: {
    id: 'm9We2XsVZfc',
    t: 12,
    name: 'Lincoln Anderson'
  },

  Danny: {
    id: 'MGpqd-tqy3A',
    t: 33,
    name: 'Danny Barreto',
    new: true
  },

  Caroline: {
    id: '4Rg3sAb8Id8',
    t: 3,
    name: 'Caroline Blake'
  },

  Peter_J: {
    id: 'Kgjkth6BRRY',
    t: 8,
    name: 'Peter Juchniewicz'
  },

  Lori: {
    id: 'Kgjkth6BRRY',
    t: 8,
    name: 'Lori Chiappe',
    new: true
  },

  Victor: {
    id: 'cjIvu7e6Wq8',
    t: 12,
    name: 'Victor Davis'
  },

  Scott: {
    id: 'GeZZr_p6vB8',
    t: 4,
    name: 'Scott Feigelis'
  },

  Nick: {
    id: 'X7nlfWTzTUA',
    t: 32,
    name: 'Nick Forneris'
  },

  Ashish: {
    id: 'eH3giaIzONA',
    t: 37,
    name: 'Ashish Johri'
  },

  Tim: {
    id: '9bZkp7q19f0',
    t: 8,
    name: 'Tim Pratt'
  },

  Brent: {
    id: 'wyx6JDQCslE',
    t: 31,
    name: 'Brent Walbolt'
  },
};

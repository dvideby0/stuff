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
  },
  Michelle: {
    id: 'btPJPFnesV4',
    t: 8,
  },
  Lindsay: {
    id: 'pGL2rytTraA',
    t: 6,
  },
  Kacie: {
    id: '_ivt_N2Zcts',
    t: 54,
  },

  Christa: {
    id: '8OyRL48ADjQ',
    t: 60,
  },

  Andi: {
    id: '-uIEORZzFZw',
    t: 61,
  },

  Chris: {
    id: 'uGcsIdGOuZY',
    t: 36,
  },

  Sophie: {
    id: 'ZyhrYis509A',
    t: 14,
  },

  Damion: {
    id: 'fPO76Jlnz6c',
    t: 14,
  },

  Robert: {
    id: 'NHozn0YXAeE',
    t: 54,
  },

  Rich_B: {
    id: 'wv-34w8kGPM',
    t: 8,
  },

  Sarah_B: {
    id: 'fG3ngA0QZzM',
    t: 0,
  },

  Lauren: {
    id: 'iEe_eraFWWs',
    t: 14,
  },

  Chef: {
    id: 'yO2n7QoyieM',
    t: 36,
  },

  Kevin: {
    id: 'nFvRvSxsW-I',
    t: 81,
  },

  Brian: {
    id: 'kyXz6eMCj2k',
    t: 14,
  },

  Kierra: {
    id: '4QCXr79Rkcw',
    t: 38,
  },

  Andrea: {
    id: 'tAp9BKosZXs',
    t: 33,
  },

  Peter: {
    id: '3gOHvDP_vCs',
    t: 27,
  },

  Geoff: {
    id: 'v2AC41dglnM',
    t: 49,
  },

  Rich_G: {
    id: 'bBR94L1Usgs',
    t: 16,
  },

  Brad: {
    id: 'W3q8Od5qJio',
    t: 45,
  },

  Eric: {
    id: 'C-u5WLJ9Yk4',
    u: 22,
  },

  Brandon: {
    id: 'WeYsTmIzjkw',
    t: 40,
  },

  Logan: {
    id: '7P_9hDzG1i0',
    t: 92,
  },

  Blake: {
    id: 'l5aZJBLAu1E',
    t: 56,
  },

  Garry: {
    id: 'fNFzfwLM72c',
    t: 0,
  },

  Chelsea: {
    id: 'sQgd6MccwZc',
    t: 23,
  },

  Megan: {
    id: 'GGXzlRoNtHU',
    t: 4,
  },

  Andrew: {
    id: 'y3zEujFbAPs',
    t: 87,
  },

  Jeremy: {
    id: 'OoinfsXvfNE',
    t: 18,
  },

  Eran: {
    id: 'QtTR-_Klcq8',
    t: 6,
  },

  Magbic: {
    id: '6IJCFc_qkHw',
    t: 0,
  },

  Lincoln: {
    id: 'M48nlk-1kH8',
    t: 9,
  },

  Danny: {
    id: 'MGpqd-tqy3A',
    t: 33,
  },

  Caroline: {
    id: '4Rg3sAb8Id8',
    t: 3,
  },

  Peter_J: {
    id: 'Kgjkth6BRRY',
    t: 8,
  },

  Lori: {
    id: 'Kgjkth6BRRY',
    t: 8,
  },

  Victor: {
    id: 'cjIvu7e6Wq8',
    t: 12,
  },

  Scott: {
    id: 'GeZZr_p6vB8',
    t: 4,
  },

  Nick: {
    id: 'X7nlfWTzTUA',
    t: 32,
  },

  Ashish: {
    id: 'eH3giaIzONA',
    t: 37,
  },

  Tim: {
    id: '9bZkp7q19f0',
    t: 8,
  },

  Brent: {
    id: 'wyx6JDQCslE',
    t: 31,
  },
};

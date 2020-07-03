import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  //Hard coding for simplicity. Pretend it a database
  res.json([
    {"id":1,"firstName":"Zeb", "lastName":"Mandela", "email":"xoxo.y.com"},
    {"id":2,"firstName":"Zet", "lastName":"Jomo", "email":"joxo.y.com"},
    {"id":3,"firstName":"Zen", "lastName":"Khoza", "email":"khxo.y.com"},
    {"id":4,"firstName":"Ze", "lastName":"Jiba", "email":"jixo.y.com"}
  ]);
});



app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http:localhost:' + port);
  }
});

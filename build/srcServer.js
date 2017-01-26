import './mithrilSetup'
import csshook from 'css-modules-require-hook/preset'
import express from 'express'

import open from 'open'
import routes from '../src/routes'
import render from './render'

const port = 3000;
const app = express();



app.use(render({
    routes: routes
}))







app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

import './mithrilSetup'
import path from 'path'
import fs from 'fs'
import compression from 'compression'
import 'css-modules-require-hook/preset'
import express from 'express'
import routes from '../src/routes'
import render from './render'

const port = 3000
const app = express()

const getHtml = () =>
  fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8')

app.use(render({
  html: getHtml,
  routes: routes
}))

app.use(compression())

const assetsDir = path.resolve(__dirname, '../dist/')

app.use(express.static(assetsDir))
app.use((req, res) => res.sendFile(`${assetsDir}/index.html`))

app.listen(port, err => {
  if (err) {
    console.log(err)
  }
})

const express = require('express')
const r = require('rethinkdbdash')()
const bodyParser = require('body-parser')
const webpack = require('webpack')
const config = require('./build/webpack.dev.conf')
const _ = require('lodash')

const app = express()
const router = express.Router()
const compiler = webpack(config)
const jsonParser = bodyParser.json()

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

router.get('/projects', (req, res) => {
  r.table("projects").orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log("Error:", err)
  })
})

router.post('/projects', jsonParser, (req, res) => {
  const project = {
    'title': req.body.title,
    'content': req.body.content,
    'createdAt': new Date().toJSON()
  }
  r.table('projects').insert(project).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/projects/:id', (req, res) => {
  r.table('projects').get(req.params.id).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/projects/:id/feeds', (req, res) => {
  r.table('feeds').filter({projectId: req.params.id}).orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/feeds', (req, res) => {
  r.table("feeds").orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log("Error:", err)
    res.send(result)
  })
})

router.post('/feeds', jsonParser, (req, res) => {
  const feed = {
    'content': req.body.content,
    'createdAt': new Date().toJSON(),
    'projectId': req.body.projectId
  }
  r.table('feeds').insert(feed).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

app.use('/api', router)

app.listen(8090, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8090')
})

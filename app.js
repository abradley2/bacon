var _ = require('underscore'),
    fs = require('fs'),
    koa = require('koa'),
    serve = require('koa-static'),
    session = require('koa-session'),
    bodyParser = require('koa-bodyparser'),
    Router = require('koa-router'),
    app = koa()

app.keys = ['secret..- aaaaagent man, secret..- aaaaaagent man']
app.use(session(app))
app.use(function* (next) {
    _.defaults(this.session, {
        currentUser: {
            _id: null,
            name: null,
            loggedIn: false
        }
    })
    yield next
})

app.use( serve(__dirname + '/public') )
app.use( bodyParser() )

var site = new Router()

site.get('/app/:path*', function* () {
    this.response.type = 'text/html'
    this.response.body = yield getFile('public/index.html')
})

app.use( site.routes() )

var api = new Router()

api.use('/api/session', require('./api/session').routes())

app.use( api.routes() )
app.listen( 8080 )

function getFile (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(__dirname + '/' + path, function (err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

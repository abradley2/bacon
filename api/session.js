var Router = require('koa-router'),
    session = new Router()

session.get('/', function* () {

    this.response.type = 'application/json'
    this.response.body = JSON.stringify(this.session)
    
})

module.exports = session

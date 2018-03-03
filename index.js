console.log('JimChoo1')
/* var test = require('./test') */
console.log('JimChoo2')
var choo = require('choo')
console.log('JimChoo3')
var store = require('./stores/clicks')

var app = choo()

app.use(store)

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
'use strict'

var xtend = require('xtend')
var mdns = require('raop-mdns-server')

module.exports = function raop (opts, cb) {
  if (typeof opts === 'function') return raop(null, opts)
  if (typeof opts === 'string') opts = { name: opts }
  opts = xtend({ name: 'Node.js', port: 5000 }, opts)
  mdns(opts, cb)
}

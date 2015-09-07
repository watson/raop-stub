# raop-stub

Expose a phantom RAOP server on the network.

This advertises a RAOP server using mDNS, but doesn't actually listen on
the advertised port.

[![Build status](https://travis-ci.org/watson/raop-stub.svg?branch=master)](https://travis-ci.org/watson/raop-stub)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install raop-stub
```

## Usage

```js
var raop = require('raop-stub')

raop('My AirPlay Server')
```

## API

The raop-stub module exposes a single function:

### `raop([options], callback)`

Options:

- `name` - The server name that should be advertised (defaults to `Node.js`)
- `port` - The port that should be advertised (defaults to `5000`)
- `txt` - A custom txt record (optional)
- `mac` - The MAC address of the network interface (optional)

If the `options` argument is a string, it will mean the same as just
setting `options.name`.

The callback is called when the advertisement have been set up. It's
called with an optional error object and the txt record that is
advertised.

## License

MIT


var test = require('colored-tape');
var prefix = require('..').nodePrefix();
var globalModPath = require('..').globalModulePath('foo')
console.log(globalModPath)

test('nodePrefix', function (t) {
    t.equal(prefix, '/usr/local/lib')

    t.end();
});

test('globalModulePath', function (t) {
    t.equal(globalModPath, '/usr/local/lib/node_modules/foo')

    t.end();
});

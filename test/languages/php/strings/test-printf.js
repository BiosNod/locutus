// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
var XMLHttpRequest = {} // eslint-disable-line no-native-reassign
var window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var printf = require('/Users/kvz/code/phpjs/src/php/strings/printf.js')

describe('src/php/strings/printf.js', function () {
  it.skip('should pass example 1', function (done) {
    printf("%01.2f", 123.1)
    var expected = 6
    var result = printf("%01.2f", 123.1)
    expect(result).to.deep.equal(expected)
    done()
  })
})
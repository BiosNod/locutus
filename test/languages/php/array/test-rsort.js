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
var rsort = require('/Users/kvz/code/phpjs/src/php/array/rsort.js')

describe('src/php/array/rsort.js', function () {
  it.skip('should pass example 1', function (done) {
    var $arr = ['Kevin', 'van', 'Zonneveld']
    rsort($arr)
    var $result = $arr
    var expected = ['van', 'Zonneveld', 'Kevin']
var $arr = ['Kevin', 'van', 'Zonneveld']
rsort($arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.strictForIn', true)
    var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    rsort($fruits)
    var $result = $fruits
    var expected = {0: 'orange', 1: 'lemon', 2: 'banana', 3: 'apple'}
ini_set('locutus.strictForIn', true)
var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
rsort($fruits)
    var result = $fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})
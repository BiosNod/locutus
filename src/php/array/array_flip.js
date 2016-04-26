module.exports = function array_flip (trans) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/array_flip/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Pier Paolo Ramon (http://www.mastersoup.com/)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //        test: skip-all
  //   example 1: array_flip( {a: 1, b: 1, c: 2} )
  //   returns 1: {1: 'b', 2: 'c'}
  //   example 2: ini_set('locutus.return_locutus_arrays', 'on')
  //   example 2: array_flip(array({a: 0}, {b: 1}, {c: 2}))[1]
  //   returns 2: 'b'

  var key, tmp_ar = {}

  // Duck-type check for our own array()-created LOCUTUS_Array
  if (trans && typeof trans === 'object' && trans.change_key_case) {
    return trans.flip()
  }

  for (key in trans) {
    if (!trans.hasOwnProperty(key)) {
      continue
    }
    tmp_ar[trans[key]] = key
  }

  return tmp_ar
}
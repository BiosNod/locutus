module.exports = function function_exists (func_name) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/function_exists/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Steve Clay
  // improved by: Legaev Andrey
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: function_exists('isFinite')
  //   returns 1: true
  //        test: skip-1

  if (typeof func_name === 'string') {
    func_name = this.window[func_name]
  }
  return typeof func_name === 'function'
}
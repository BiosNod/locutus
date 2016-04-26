module.exports = function array_merge_recursive (arr1, arr2) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/array_merge_recursive/
  // original by: Subhasis Deb
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  //   example 1: arr1 = {'color': {'favourite': 'read'}, 0: 5}
  //   example 1: arr2 = {0: 10, 'color': {'favorite': 'green', 0: 'blue'}}
  //   example 1: array_merge_recursive(arr1, arr2)
  //   returns 1: {'color': {'favorite': {0: 'red', 1: 'green'}, 0: 'blue'}, 1: 5, 1: 10}
  //        test: skip-1

  var array_merge = require('../array/array_merge')
  var idx = ''

  if (arr1 && Object.prototype.toString.call(arr1) === '[object Array]' &&
    arr2 && Object.prototype.toString.call(arr2) === '[object Array]') {
    for (idx in arr2) {
      arr1.push(arr2[idx])
    }
  } else if ((arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object))) {
    for (idx in arr2) {
      if (idx in arr1) {
        if (typeof arr1[idx] === 'object' && typeof arr2 === 'object') {
          arr1[idx] = array_merge(arr1[idx], arr2[idx])
        } else {
          arr1[idx] = arr2[idx]
        }
      } else {
        arr1[idx] = arr2[idx]
      }
    }
  }

  return arr1
}
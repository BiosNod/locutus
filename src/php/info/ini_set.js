module.exports = function ini_set (varname, newvalue) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/ini_set/
  // original by: Brett Zamir (http://brett-zamir.me)
  //        note: This will not set a global_value or access level for the ini item
  //   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
  //   example 1: ini_set('date.timezone', 'America/Chicago')
  //   returns 1: 'Asia/Hong_Kong'

  var $global = (typeof window !== 'undefined' ? window : GLOBAL)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}
  $locutus.php.ini = $locutus.php.ini || {}

  $locutus.php.ini = $locutus.php.ini || {}
  $locutus.php.ini[varname] = $locutus.php.ini[varname] || {}

  var oldval = $locutus.php.ini[varname].local_value

  if (newvalue === true || (newvalue + '').toLowerCase().trim() === 'on') {
    newvalue = 'on'
  }
  if (newvalue === false || (newvalue + '').toLowerCase().trim() === 'off') {
    newvalue = 'off'
  }

  var _setArr = function (oldval) {
    // Although these are set individually, they are all accumulated
    if (typeof oldval === 'undefined') {
      $locutus.ini[varname].local_value = []
    }
    $locutus.ini[varname].local_value.push(newvalue)
  }

  switch (varname) {
    case 'extension':
      _setArr(oldval, newvalue)
      break
    default:
      $locutus.php.ini[varname].local_value = newvalue
      break
  }

  return oldval
}
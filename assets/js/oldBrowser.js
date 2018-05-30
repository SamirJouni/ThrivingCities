document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";

  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  if (isIE) {
    alert('Please Update Your Browser To A Modern Browser Like Google Chrome Or Mozilla Firefox For a Better Experience.');
    window.location.href = 'http://outdatedbrowser.com/';
  }
});

document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";

  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  if (isIE) {

    var message = confirm("Please Update Your Browser To A Modern Browser Like Google Chrome Or Mozilla Firefox For A Better Experience. The Webpage Might Not Retain Its Full And Intended Functionality On Your Current Browser.");

    if (message) {
      window.location.href = 'http://outdatedbrowser.com/';
    }
  }
});

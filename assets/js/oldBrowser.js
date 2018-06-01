/*
  This File detects if the user is running Internet Explorer, which is an outdated browser by today's standards.
  The user will not be able to enjoy the full experience of this modern webpage on IE, so they will get a message
  giving them the option to update for free to a more modern browser of their choice, with easy to follow instructions
  on how to upgrade.

*/

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

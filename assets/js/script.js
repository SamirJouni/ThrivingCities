document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";

  /* Event Listener To Redirect To Homepage On Logo CLick */
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function() {
    window.location.href = "http://thrivingcities.com/";
  });
  /* Event Animation */
  const events = Array.from(document.getElementsByClassName('event'));
  events.forEach(function(event) {
    event.addEventListener('click', function() {
      event.classList.add('zoomInOut');
      setTimeout(function() {
        event.classList.remove('zoomInOut');
      }, 300);
    });
  });

  /* Button Click Animation */
  const subscribeButton = document.querySelector('.subscribeButton');
  subscribeButton.addEventListener('click', function() {
    subscribeButton.classList.add('zoomInOut');
    setTimeout(function() {
      subscribeButton.classList.remove('zoomInOut');
    }, 300);
  });

  /* Event Listener To Expand an Event on Button CLick */
  const readMore = Array.from(document.getElementsByClassName('readMore'));
  readMore.forEach(function(readmore) {
    readmore.addEventListener('click', function() {


    });
  });

});

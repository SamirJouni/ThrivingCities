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
    /* This Redirects To Mailchimp When The Button Is Clicked */
    window.location.href =
      'http://iasc-culture.us11.list-manage.com/subscribe/post?u=0bd38571820ea697cfb101c21&id=618afc487a';
  });

});

document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";
  /* Smooth Scroll To Events Section */
  const eventsTrigger = document.getElementById('eventsTrigger');
  const destination = document.getElementById('EVENTS');
  eventsTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(destination);
  });

  /* Detect if Mouse if Over Sign Up Button */
  const signUpButton = document.querySelector('.signUpButton');
  var mouseOverButton = false;

  signUpButton.addEventListener('mouseover', function() {
    mouseOverButton = true;
  });
  signUpButton.addEventListener('mouseout', function () {
    mouseOverButton = false;
  });

  /* Sign Up Button Redirect On Click */
  signUpButton.addEventListener('click', function () {
    window.location.href =
    'http://iasc-culture.us11.list-manage.com/subscribe/post?u=0bd38571820ea697cfb101c21&id=618afc487a';
  });

  /* Event Animation */
  const events = Array.from(document.getElementsByClassName('event'));
  var clickedEventId = 0;

  events.forEach(function(event) {
    event.addEventListener('click', function() {
      if (!mouseOverButton) {
        event.classList.add('zoomInOut');
        setTimeout(function() {
          event.classList.remove('zoomInOut');
        }, 300);

        clickedEventId = document.getElementById('event' + events.indexOf(event));

        /* Expand Event */

        setTimeout(function() {
          const eventExpandedElements = Array.from(clickedEventId.querySelectorAll ('.dontDisplayInitially'));
          const eventElementsToHide = Array.from(clickedEventId.querySelectorAll ('.hideOnExpand'));
          const eventTitle = Array.from(clickedEventId.querySelectorAll ('.eventTitle'));
          const eventImage = Array.from(clickedEventId.querySelectorAll ('.eventImage'));

          eventExpandedElements.forEach(function (element) {
              element.classList.toggle('dontDisplay');
          });
          eventElementsToHide.forEach(function (element) {
              element.classList.toggle('dontDisplay');
          });
          eventTitle.forEach(function (element) {
              element.classList.toggle('eventTitleExpanded');
          });
          eventImage.forEach(function (element) {
              element.classList.toggle('eventImageExpanded');
          });
        }, 300);
      }
    });
  });
});

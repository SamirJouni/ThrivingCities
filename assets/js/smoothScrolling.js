/*
  # This function is responsible for the smooth scrolling on the page.
    To observe it working, simply press the Events option in the navbar
    and it will scroll you down to the latest events in a very smooth
    manner.

  # The function Accepts two arguments, the first being an object that
    represents the target destination. Using the Class-name, or Id of
    the element is not enough, you have to get the object that represents
    the element using:

    document.getElemenetById('Id of element');
    or
    document.getElementsByClassName('Class-name of the element');
    or
    many of the other methods to get the object representing the element.

    That object then would be passed as an argument for the destination.


  # As for the duration, it is a simple numeric value, measured in milliseconds.
    If no value is specified, it will run at 800ms by default.

*/

function smoothScrollTo(destination, duration) {
  "use strict";

  duration = duration ? duration : 800;
  var failCounter = 0;
  var isFunctionRunning = false;

  if (isFunctionRunning){
    isFunctionRunning = false;
    return false;
  }

  isFunctionRunning = true;

  var start = document.scrollingElement.scrollTop;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var destinationOffsetToScroll = Math.round(destination.getBoundingClientRect().top + start);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    isFunctionRunning = false;
    return false;
  }

  failCounter = 0;


  (function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, ((now - startTime) / duration));
    var timeFunction = easeInOutCubicBezier(time);

    var ScrolledDistance = document.scrollingElement.scrollTop;
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    var ScrolledDistanceAfter = document.scrollingElement.scrollTop;

    if (Math.round(ScrolledDistance) == destinationOffsetToScroll) {
      isFunctionRunning = false;
      return false;
    }

    if (time !== 0 && (ScrolledDistanceAfter == ScrolledDistance||
       ScrolledDistanceAfter == destinationOffsetToScroll)){

      failCounter += 1;

      if (failCounter == 11){

        failCounter = 0;
        isFunctionRunning = false;
        return false;
      }
    }
    requestAnimationFrame(scroll);
  })();
}

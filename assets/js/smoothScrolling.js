function smoothScrollTo(destination, duration) {
  "use strict";

  duration = duration ? duration : 1600;
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

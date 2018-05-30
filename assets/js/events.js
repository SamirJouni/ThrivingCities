document.addEventListener('DOMContentLoaded', function(event) {
  "use strict";

  const eventsTrigger = document.getElementById('eventsTrigger');
  const destination = document.getElementById('EVENTS');
  eventsTrigger.addEventListener('click', function (event){
    event.preventDefault();
    smoothScrollTo(destination);
  });
});

document.addEventListener('DOMContentLoaded', function(){
  "use strict";

  const Elements = Array.from(document.querySelectorAll('input'));
  var ElementText = []; // An array to store placeholders

  Elements.forEach(function(element){
    ElementText.push(element.placeholder); // pushing placeholders into the empty array

    element.addEventListener("focusin", function (event) { // Event listener when element is in focus
      element.placeholder = ""; // setting placeholder to nothing

    });

    element.addEventListener("focusout", function (event) { // Event listener on when element is not in focus
      if (!element.value){
        element.placeholder = ElementText[Elements.indexOf(element)]; // retrieving old placeholder and setting it
      }

    });
  });
});

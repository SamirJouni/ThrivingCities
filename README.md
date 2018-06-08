# ThrivingCities

  ###### This is a website for the events that Thriving Citites Organizes.


## PLEASE READ THIS DOCUMENTATION CAREFULLY TO KNOW HOW TO USE, HOST, AND EDIT THIS WEBPAGE.

### The Files/Folders included and their roles:

  - README.md: This is the file containing all documentation.
  - index.html: This is the file containing all the markup of the webpage.
  - assets: contains all the assets needed for the webpage.
  - assets/
            - css: Contains all the styling files for the page like style.css

            - eventsImages: contains all the images for events listed on the page.

            - images: contains all images for the page excluding those for events,
                like the favicon, or the image in the footer.

            - js: contains all the JavaScript script files needed for the page.

            - Thriving Cities Designs: Contains all the design files like Adobe illustrator
                files and SVGs.
    - css/
            - style.css: contains the main styles for the page.

    - js/
            - easeInOutCubicBezier.js: This is a cubic bezier time function needed for smooth scrolling.

            - events.js: Contains all scripts related to events like animation triggers and interactions
                with events.

            - mc_validate.js: This is a file containing jquery and some code from mailchip. This file may be
                excluded.

            - oldBrowser.js: This script detects if the browser is Internet Explorer and if it is, then the user
                is given the option to follow a simple guide on how to install a more modern browser to enjoy
                the full experience of the page.

            - script.js: This script contains scripts for all interactions with the page, like clicking buttons and
                the like.

            - smoothScrolling.js: This script makes scrolls smoothly to the events section when events is clicked in
                the navigation bar.

            - togglePlaceholderOnClick.js: Removes the placeholder from input fields when the field is in focus
                ( like for example clicked) and saves it, then places it again once the input filed is out of focus.


    - Thriving Cities Desings/
                                - heroImageEnhanced.svg: This is the background in the top of the page.

                                - logoWithText.svg: This is the logo on the upper left hand corner of the page.


    #### All files not mentioned here are unnecessary for the website. You may delete them or keep them for other projects. It's your choice.

## Minification:

  Please don't forget to bundle up and minify all
  css and js files after modifying them according to
  your needs. It will reduce the time it takes to load
  up the page by a lot.

  After doing that, place the css files between style tags in
  the head of this document. And the js files between script
  tags just above the closing body tag of this document.

For bundling css or js, simply copy and paste all contents of
the files into the minifier in one go. But minify CSS and JS
separately. I recommend the following website to minify your css
and js: https://www.minifier.org

For minifying the html document, I recommend:
http://kangax.github.io/html-minifier/
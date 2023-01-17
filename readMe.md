~~~~~~~~~~~ Description ~~~~~~~~~~
Welcome to Hangero, a new online clothing store that caters to your unique style.
Its name was inspired from a hanger :)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:
~~~~~~~~~~ Link to External Website ~~~~~~~~
https://hangero.netlify.app/index.html
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:
:
~~~~~~~~~~~~~ assets ~~~~~~~~~~~~~
/_ homestyle
.______ home.css --> the css style for the homepage

/__ images
.______ favicon.png --> favicon image
//______ carousel
.____________ img0.png --> the first image for the the carousel
.____________ img1.png --> the second image for the the carousel

/_ reusableStyle --> css styles reused multiple times
.______ card.css --> this is for the card to be created with specified dimentions and transitions
.______ footer.css --> this is the styling for the footer
.______ logIn.css --> gives the login pop-up some styling
.______ nav.css --> gives some stying to the navigation bar
.______ popUp.css --> gives the (subscribe to news letter) and (free shipping delivery) pop-ups some styling

/_ scripts --> javascript properties and actions given to the html pages
.______ addressSubmit.js --> performs the next action (bring to another page) after the form is sumbitted
.______ cardInjector.js --> this allows the card to be exported to the html according to its class and location so that it is visible and shown on the html page allocated to it
.______ cards.js --> product details are put as an array in an object to be imported into cards later on
.______ cartCards.js --> cartCards in cards.js are imported ; "gift" and "shipping" cards are created when its options are selected/checked ; some math is done with the pricings
.______ createCard.js --> this is where all the products(normal and homepage flash sales) cards are created using html written in js code and exported to the html
.______ login.js --> allows you to login to the website
.______ navScroll.js --> this is what animates the navigation bar according to its y-coords, also with some shadow given
.______ popUp.js --> makes the (subscribe to news letter) and (free shipping delivery) pop-ups pop out after a given time
.______ slider.js --> allows the slider of the flash sales on the homepage to work
.______ timer.js --> sets the timer count down for the headline of today's best deals and free shipping delivery pop-up
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:
~~~~~~~~~ componentStyle ~~~~~~~~~
._ address.css --> styles the payment address page
._ cart.css --> styles the cart page
._ confirm.css --> styles the payment confirmed page
._ payment.css --> styles the payment selections types page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:
~~~~~~~~~~~~~~ pages ~~~~~~~~~~~~~
._ address.html --> html for the address page
._ cart.html --> html for the cart page
._ child.html --> html for the child category page
._ confirm.hyml --> html for the payment confirmed page
._ men.html --> html for the men category page
._ payment.html --> html for the payment selection types page
._ woman.html --> html for the woman category page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:
~~~~~~~~~~~ index.html ~~~~~~~~~~~ 
main html page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


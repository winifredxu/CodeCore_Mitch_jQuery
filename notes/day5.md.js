# Housekeeping

Who handed in Jukebox from last time?
- Tyler, Brandyn, Merle, Ben, Paulo




# More Events

`keyup` event on input elements
transition
## Demo
- Logging as typing in field.
$('#form-1 input[type="text"]').on('keyup', function(event) {
  console.log(event.which);
});


## Exercises [script]

- As you type in the text input, change the "Form Message" to be the same as what you type.
 keyup
 event.which
 String.fromCharCode(73)
 val()

$('#form-1 input[type="text"]').on('keyup', function(event) {
  var txt = $(this).val();
  $('#form-message').text( txt );
});

- As you type in the text input, change the "Form Message" to be the REVERSE of what you type. (2 ways below)
$('#form-1 input[type="text"]').on('keyup', function(event) {
  var txt = $(this).val();
  var txt2 = txt.split("").reverse();
  $('#form-message').text ( txt2.join("") );
});

$('#form-1 input[type="text"]').on('keyup', function(event) {
  var char = String.fromCharCode(event.which + 32);
  $('#form-message').prepend( char );
});

- Make the "Form Message" show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").
$('#form-1 input[type="text"]').on('keyup', function() {
  var counter = $(this).val().length;
  $('#form-message').text ( (14-counter)+" chars remaining." );
});


`submit` event on form elements
<form>
  <input type="text"/>
  <input type="submit"/>
</form>

$('form').on('submit', function(event){
    event.preventDefault();
});

## Exercises [script]

- When the form is submitted, clear the text in the input field.

$('#form-1 input[type="submit"]').on('click', function() {
  $('#form-1 input[type="text"]').val("");
});

- Shape Destroyer:
  The user can enter a color into the input field. When they click "submit":
  - All shapes matching the given color should be removed.
  - If they enter an invalid color show them an alert message telling them this.
  - Clear the input field.
$('#form-1 input[type="submit"').on('click', function() {
  var color = $(this).find('input[type=text]').val();
  $(".shape."+color).remove();
  $('#form-1 input[type="text"]').val("");
});



# Asset Pipeline
- Overview

-- overview on 'assets' directory in Rails project, flattened directory system, require_tree will load all files under 'assets'.

- Questions



# Turbolinks

- Why? How?
- Where is Turbolinks?
- Gotchas <-- some times it breaks things that were assumed loaded under $(document).ready()
- jQuery Turbolinks gem <-- always add the Gemfile, and also in application.js file line.


# Delegated events

Problem: Event handlers aren't live. New elements don't work.

Example:
- Set click handler shapes.
$('#button-1').on('click', function (){
  $('#green-container').append('<div class="large red square shape"></div>');
});
- Add a new shape in console.
$('.shape').on('click', function() {
  $(this).remove();
});

-- problem:  since large red square shape is added after the .shape click event is registered, its not going to remove(). 
soln 1:
add redundent code to "button-1" code function() section
soln 2:
add the click event to green-container, which via delegate of event will propagate the effects to all of its children, see below:

Solution: Use bubbling to delegate to a container that is always there.

$('#green-container').on('click', '.shape', function() {
  $(this).remove();
});

```js
$('.container').on('click', '.shape', function() {
  // Works for newly created shapes!
});
```

## Exercises
- Set a delegated click handler on the orange container so that red shapes are removed when you click them.

$('#orange-container').on('click', '.red.shape', function () {
  $(this).remove();
});



# Basic jQuery Animations

- Adding timing parameter to effects.

`slideUp(500)`, `fadeOut('slow')`

- Introduction to Animations Lab




## Exercises [console]
- Make "item-1" slide up over 1 second.
$('#list-item-1').slideUp(1000);

- Make "item-2" fade out slowly using the 'slow' parameter.
$('#list-item-2').fadeOut('slow');

- Toggle "item-3" quickly, using the 'fast' parameter.
$('#list-item-3').toggle('fast');






## Sequential Animations

Example:
- Fade out item 1 in 5 seconds.
- Fade out item 2 in 5 seconds.
- note: they both start fading simultaneously, these are ASYNchronous calls.
$('#list-item-1').fadeOut(5000);
$('#list-item-2').fadeOut(5000);

- How can you start one animation after another one is complete?
- `onComplete` callback as last parameter to effects.

$('#list-item-1').fadeOut(5000, function() {
  $('#list-item-2').fadeOut(5000);
});




## Exercises [script]
- Write a script that:
  - Fades out item-1 in 1 second
  - THEN fade out item-2 in 1 second
  - THEN fade out item-3 in 1 second


$('#list-item-1').fadeOut(1000, function() {
  $('#list-item-2').fadeOut(1000, function() {
    $('#list-item-3').fadeOut(1000);
  });
});



# Asynchronous vs. Synchronous calls

Q: Why does our `playSong` method need a callback when complete?
Asynchronous examples:
- `playSong` method, `setTimeout`, `setInterval`, animations, AJAX


# Advanced Animations

Wide world. We'll just get a taste of what's possible.

Showcase:
- Ball moves to cursor http://jsfiddle.net/RwtHn/5/  (CSS animation + jQuery ??)
- Canvas snow effect http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect
(snow effect using HTML5 Canvas and Javascript)

- Keyframes http://www.impressivewebs.com/demo-files/css3-animated-scene/
- animate.css

CSS Transitions
CSS Keyframes




# Prerequisite: Changing attributes dynamically.


$('p').attr('style', 'color: red;');
$('p').css('color', 'red');   <-- setter
$('p').css('color');   <-- getter

CSS concept of "tweening"!

## A) Adding / Removing classes

- 1) Create a class before-hand with the styles you will want to add.
- 2) Add that class to an element dynamically.

#rocket.big {
  width: 300px;
}

$('#rocket').addClass('big');



e.g. "highlight" class in jQuery Lab

- Pro: Keeps styling information out of JS. Can change the look without changing behaviour.







### Exercises

- Make the rocket ship twice as big by adding a class to it in the console. Now remove the class in the console.
- Make "item-1" have a red border by adding a class to it in the console. Now remove the class in the console.
#list-item-1.red {
  border-color: #FF0000;
}

$('#list-item-1').addClass('red');

## B) Setting CSS properties directly in JS

- Pro: Ultimate control

- `css` method is often more convenient than `attr('style')`

```js
// Get -- getter
$('.shape').css('left'); // => '5px'

// Update -- setter
$('.shape').css('left', '1px');
```

Be careful of units.


### Exercises
Using the `css` method:
- Get the border-width of the first list item on the page.
console.log ($('#list-item-1').css('border-width') );

- Change the border color of all the list items to red.

$('li').css('border-color', 'red');

- Write a script so that when you click a list item, its border-width is set to 10px.
$('li').on('click', function(){
  $(this).css('border-width', 10px);
});


CSS position absolute
# relative position is relative to where the object would be normally
# absolute position is absolute to the 1 level higher

.container {
  position: relative;
}
.shape {
  position: absolute;
}

### Exercises
- Make sure the rocket ship is using absolute positioning.
(already in Mitchs code #rocket{} section)
- Determine what container the rocket ships positioning will be relative to.

- Change the page's CSS so that the rocket ship is positioned 500px from the top and the left of the page.
- Write a script so that the rocket ship moves 10px to the right when you click it.

- [Challenge] Write a script so the rocket ship appears wherever you click on the page.

use 'event.pageX()' and 'event.pageY()'




# Transitions (Tweening)

setInterval(function(){
  var top = parseInt($('#rocket).css('top'));
  $('rocket').css('top', top-2); //move-up on screen is -Y. 
}, 33);    //30 times a second (30Hz) is 33 msec interval, frame rate

## A) Manual

Animation loop manually using setInterval.

Example: Animate width of list-item-1 with









### Exercise
- Animate the rocket ship launching into the air using an animation loop.


## B) jQuery Animate
- http://api.jquery.com/animate/
- Convenient but not great.


- CON: not very efficient, better to let browser do the work using CSS Transitions. 

## C) CSS Transitions

Pro: SMOOTH!

- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions
- CSS transitions and adding classes
 #rocket {
        position: absolute;
        top: 400px;
        right: 30px;
        width: 50px;
        opacity: 1;
        transition: all 3s;
      }

      #rocket.big {
        width: 100px;
      }

$('#rocket').css('top', '100px');
$('#rocket').addClass('big');
$('#rocket').removeClass('big');


```css
li {
  /* 1) Set the original property value */
  opacity: 0;
  /* 2) Describe how to transition that property */
  transition: opacity 0.5s;
}

/* 3) Create a class that sets the final property value */
li.active {
  opacity: 1;
}

/* 4) The browser tweens for you! */
```

Works great with: opacity, width, height, left, top.


### Exercises:
Using a CSS transition and a helper class:
- When "Button 1" is clicked, animate the rocket ship to double its size. Make it return to its previous size when clicked again.

$('#button-1').on('click', function(){
  $('#rocket').toggleClass('big');
});
- When "Button 2" is clicked, animate the rocket ship to slide to the right 100 px when clicked, and back when clicked again.
$('#button-2').on('click', function(){
  $('#rocket').toggleClass('slide-right');
});
- When the rocket ship is clicked, animate it to fade out (using CSS transitions).
$('#rocket').on('click', function(){
  if ($('#rocket').css('opacity') == 1) {
    $('#rocket').css('opacity', '0.2');
  } else {
    $('#rocket').css('opacity', '1');
  }
});



Commonly animate by adding/removing classes.
Changing properties manually works too, though.



Example: Moving the rocket ship in the console.


### Exercises
- Use the `css` method to animate the rocket 10px to the right in the console.
$('#rocket').css('right', 250px);

- Rocket driver:
  - Make the arrow keys animate the rocket left(37), up(38), right(39) and down(40).
$(document).on('keydown', function(event) {
  console.log(event.which);
  if (event.which == 37) { //left key
    var left = parseInt($('#rocket').css('left') );
    $('#rocket').css('left', left-10);
  } else if (event.which == 38) { //up key
    var up = parseInt($('#rocket').css('top') );
    $('#rocket').css('top', top-10);
  } else if (event.which == 39) { //right key

  } else if (event.which == 40) { //down key

  }

});





# jQuery UI

- http://jqueryui.com/
- Experiment with site
- Sortables


## Exercises
- Make the two lists sortable
- Enable dropping items from one list into the other.
(see code in index.html -- the file where the rocket ship is.)



# CSS Keyframes

- For more complex, multi-step, animations.

- animate.css
- Sunrise: http://www.impressivewebs.com/demo-files/css3-animated-scene/
- References:
  - http://css-tricks.com/snippets/css/keyframe-animation-syntax/
  - http://www.smashingmagazine.com/2011/05/17/an-introduction-to-css3-keyframe-animations/
  - http://www.w3schools.com/css/css3_animations.asp

```css
/* 1) Create animation keyframes */
@keyframes drive {
  0%    { left: 0; bottom: 0; }
  50%   { left: 0; bottom: 200px; }
  100%  { left: 200px; bottom: 200px; }
}

/* 2) Create a class to add the animations dynamically */
#rocket.drive {
  animation: drive 5s; /* animation: drive, animation-duration: 5s, */
}

$('#rocket').toggleClass('drive');  /* in console */

/* 3) Add -webkit- prefixes */
```

## Exercise
- Make your own crazy 'drive' animation for the rocket ship, and execute it when "button-1" is clicked.

#rocket.animate {
  animation: drive 5s;
}

$('#button-1').on('click', function() {
  $('#rocket').toggleClass('drive');
});

# Vendor prefixing
- http://pleeease.io/play/
- http://leaverou.github.io/prefixfree/
- http://caniuse  -- look at if a feature is supported in a particlar browser
- http://  w3schools, browser stats -- to see usage stats on various browsers

-webkit-
-moz-
-o-


# Canvas
- Snow Effect: http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect



# Homework
- Jukebox in class
- Credit Card validator

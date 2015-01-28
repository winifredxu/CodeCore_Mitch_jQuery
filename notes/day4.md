http://overapi.com/jquery/


# Selectors  -- Attribute selectors, these only select the attributes, not the element tags

```
[name]						<-- if the attribute is present at all
[name="value"]    <-- if the attribute has this value  $('[href="www.google.com"]')
[name!="value"]   <-- if the attribute does NOT have this value $('[href!="www.google.com"]')
[name*="value"]   <-- if the attribute CONTAINS the value "includes"   $('[href*="google"]')
[name~="value"]   <-- if the attribute CONTAINS the value separated by spaces. match attributes whole word separated by spaces
[name$="value"]		<-- RegExp for match ending of the value
[name^="value"]		<-- RegExp for match beginning of the value

--related tags:      $('a[href]') vs $('[href]')  <--  "<a href=> " vs anything with "href"
										 $('script[src]')  vs $('[img]')  <-- "<script src=>" vs "<img src=>"
```

## Exercises [console]

- Select all the links with any "href" attribute  $('[href]')
- Select all the links to "http://www.facebook.com"   $('[href="http://www.facebook.com"]')
- Highlight all the links to any ".com" URL by setting their class to "highlight".
	$('[href*=".com"]').attr('class', 'highlight')

	ALTERNATIVE ($=  selects ending in "") ---  $('[href$=".com"]').attr('class','highlight')

- Hide all the links NOT to "http://www.google.com"  $(a'[href!="http://www.google.com"]').hide()

- <div class="big green shape"></div>       $('[class~="green"')






```
:first-child			<--  $('p').eq(0)    or  $('p:first-child')  <-- paragraph that is the first-child of its parent
:last-child
:even   <-- index starts at "0", so gets the 2nd, 4th, 6th element, etc. 
:odd
```


## More Exercises [console]

- Select the first table row  $('tr:first-child')
- Select the last table rows 	$('tr:last-child')
- Remove the even-numbered shapes from the green container $('#green-container .shape:even').remove()
- Highlight the odd rows on the table		$('table tr:odd').attr('class', 'highlight')
- Hide the last shape in every Container 	$('.container .shape:last-child').hide()











# Attributes  -- attr can do all the below, but there are shortcut methods in jQuery
$('a').attr('class'.'highlight');
$('.shape').attr('class','highlight');

`addClass`, `removeClass`, `toggleClass`, `hasClass`

## Exercises
- Add the "highlight" class to all links  $('a').addClass('highlight')
- Remove the "highlight" class from all links $('a').removeClass('highlight')
- Toggle the "highlight" class on all links. Toggle again. $('a').toggleClass('highlight')
- Add the "my-own-class" class to the "body" element. Then, verify that the body element now has a Then verify it is there using "hasClass".  $('body').addClass('my-own-class'); $('body').hasClass('my-own-class')

*script:*
- When any container is clicked, add the "highlight" class to all the shapes in that container.
- When your mouse enters a shape, toggle the "highlight" class.

- Build a "Shrink Ray"
  When any shape is clicked do the following:
  - If the shape has the "small" class, hide it.

  $(document).ready( function() {
  	$('.shape').on('click', function() {
  		
  		if ( $(this).hasClass('small') ) {
  			$(this).hide();
  		};
  	});
  };

  - If it has the "medium" class, remove the "medium" class and add the "small" class.
  	$('.shape').on('click', function() {
  		if ( $(this).hasClass('medium') ) {
  			$(this).removeClass('medium').addClass('small');
  		};

  	});

  - If it has the "large" class, remove the "large" class and add the "medium class."
    $('.shape').on('click', function() {
    	if ( $(this).hasClass('large') ) {
    		$(this).removeClass('large').addClass('medium');
    	};
    });


jQuery Chaining

## More Exercises
- Change the colour of all blue shapes to red, using one line of code.
- Change all the small red circles into large grey squares, using one line of code.


- Make all blue shapes red, using one line of code.
$('.shape.blue').removeClass('blue').addClass('red');

- Simplify your Shrink Ray using chaining.
 $(document).ready( function() {
  	$('.shape').on('click', function() {
  		if ( $(this).hasClass('small') ) {
  			$(this).hide();
  		} else if ( $(this).hasClass('medium') ) {
  			$(this).removeClass('medium').addClass('small');
  		} else if ( $(this).hasClass('large') ) {
    		$(this).removeClass('large').addClass('medium');
    	};
    });
  });
  


`val`  -- used to deal with input fields in forms

<input id="field" type="text" value="Hello world"/>
$('#field').val("new text");   <-- set the value
$('#field').val();  <-- get the value

## More Exercises

*console:*

- Set the value of the text field in the form to "Hello World"  
	$('#form-1 input[type="text"]').val("Hello World");

- Get the value of the text field in the form
	$('#form-1 input[type="text"]').val();

*script:*

- When the form's "Submit" button is clicked, change the contents of "Form Message" to be the text field's value.

$('#form-1 input[type="submit"]').on('click', function () {
	$('#form-message').html( $('#form-1 input[type="text"]').val() );
});



# Manipulation

`append`, `prepend`

## Exercises

*console:*

- Append a "p" tag containing "Appended" to the "body" element. 
$('body').append("<p>Appended</p>");
- Prepend a "p" tag containing "Prepended" to the "body" tag.
$('body').prepend("<p>Prepended</p>");
- Append a new list item to the List, containing a link to link Amazon.com.
$('ul li:last-child').append('<li><a href="http://www.amazon.com">Amazon.com</a></li>');
- Prepend a row to the table containing the columns "0" and "-"
$('table').prepend("<tr><th>0</th><th>-</th></tr>");

*script:*
- When the form's submit button is clicked, append the text input's current value to the form message.

$('#form-1 input[type="submit"]').on('click', function() {
	$('#form-message').append( $('#form-1 input[type="text"]').val() );
});

```js
$('button').attr('disabled', '')
```

# Traversal - search in the children
`find`, `next`, `prev`

$('green-container .green.shape')  <!-- same as below with 'find'  -->
$('green-container').find('.green.shape');

example: 
var grCont = $('#green-container');
grCont.find('.green.shape');   <-- which cannot be done in line 193. 

## Exercises [console]

- Select all the red shapes in the orange container, using "find".
$('#orange-container').find('.red.shape');
- Remove all the shapes just before a small red circle.
$('#orange-container').find('.red.circle').prev().remove();
- Hide all shapes just after any gray shape.
$('.grey.shape').next().hide();
- Make all the circles in the green container black, using "find".
$('#green-container').find('.circle').addClass('black');



# Effects

`toggle`, `fadeOut`, `fadeIn`, `slideUp`, `slideDown`

## Exercises

*console:*

- Toggle the green container. $('#green-container').toggle();
- Toggle the green container again. $('#green-container').toggle();
- Fade the green container out. $('#green-container').fadeOut();
- Fade the green container in. $('#green-container').fadeIn();
- Slide the green container up. $('#green-container').slideUp();
- Slide the green container down. $('#green-container').slideDown();

*script:*
- When "Button 1" is clicked, toggle the green container.
$('#button-1').on('click', function() { 
	$('#green-container').toggle(); 
});
- When "Button 2" is clicked, fade the "Button Message" out
$('#button-2').on('click', function() {
	$('#button-message').fadeOut();
});
- When "Button 3" is clicked, fade the "Button Message" back in.
$('#button-3').on('click', function() {
	$('#button-message').fadeIn();
});
- When "Button 4" is clicked, slide the green container up.
$('#button-4').on('click', function() {
	$('#green-container').slideUp();
});


# Events

The event object in handler functions.

$(document).on('click', function() {
	console.log(event.pageX, event.pageY);
});

`keypress` event
## Demo
- Logging each key pressed.
var KEYS = { 
	' ': 32,
	'k': 107,
  'r': 114,
  'b': 98,
  'g': 103, //etc etc.
}; //example of using constant to create a key map


$(document).on('keypress', function(event) {
	console.log(event.which); //shows you the key map number
});


## Exercises [script]

- When the 'b' key is pressed, toggle all (b)lue shapes.
$(document).on('keypress', function(event) {
	if (event.which == 98) { //'b' is 99
		$('.blue.shape').toggle();
	};
});
- When the 'r' key is pressed, toggle all (r)ed shapes.
$(document).on('keypress', function(event) {
	if (event.which == 114) { //'r' is 114
		$('.red.shape').toggle();
	};
});
- When the 'k' key is pressed, toggle all blac(k) shapes.
$(document).on('keypress', function(event) {
	if (event.which == 107) { //'k' is 107
		$('.black.shape').toggle();
	};
});
- When the 'g' key is pressed, toggle all (g)ray shapes.
$(document).on('keypress', function(event) {
  if (event.which == 103) { //'g' is 103
    $('.grey.shape').toggle();
  };
});

- When the spacebar key is pressed, append a small blue circle to the green container.
$(document).on('keypress', function(event) {
  if (event.which == 32) { //spacebar is 32
    //String.fromCharCode(32);
    $('#green-container').append('        <div class="small blue circle shape"></div>');
  };
});



`change` event on input elements

## Demo
- Logging as typing in field.

## Exercises [script]

- As you type in the text input, change the "Form Message" to be the same as what you type.
- As you type in the text input, change the "Form Message" to be the REVERSE of what you type.
- Make the "Form Message" show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").



`submit` event on form elements

## Exercises [script]

- When the form is submitted, clear the text in the input field.

- Shape Destroyer:
  The user can enter a color into the input field. When they click "submit":
  - All shapes matching the given color should be removed.
  - If they enter an invalid color show them an alert message telling them this.
  - Clear the input field.


## Event bubbling

### Experiment [script]
- When a black square is clicked log "Black Square Clicked" to the console.
$('.black.square').on('click', function() {
	console.log("Black Square Clicked");
});
- When the orange container is clicked log "Orange Container Clicked"
$('#orange-container').on('click',function() {
	console.log("Orange Container Clicked");	
});
- Click the black square in the orange container.
- What happened? Why?  
Both messages are logged to the console.

### Discussion

- Event bubbling
- Diagram of event bubbling
- See bubbling.html demo
- `event.stopPropagation()`, example below:
$(document).ready(function() {
	console.log($(this).attr('id'), 'clicked');
	event.stopPropagation();
})

### Exercise
- Add `event.stopPropagation()` to the black square s click handler.
$('.black.square').on('click', function(){
	console.log("Black Square Clicked");
	event.stopPropagation();	
});
  What happens when you click the black square now?
only black square message is logged.
  What happens when you click the orange container OUTSIDE the black square?
only orange-container message is logged. 


## Default Action
### Experiment
- When a link is clicked, log to the console "Link Clicked"
$('a').on('click', function() {
	console.log("Link Clicked");
});
- What happens when you click a link? Why?
upon click, it logs to console the message,but immediately after the new link is loaded into the window.

### Discussion
- default action (links and forms)
- `event.preventDefault()`, this will stop the default action from taking place. 

### Exercise
- Add `event.preventDefault()` to your link click handler.
$('a').on('click', function() {
	console.log("Link Clicked");
	event.preventDefault();
});

- What happens when you click a link now?
console logs the message, but the link does not cause the page to reload. 

- What happens when you click a link now?
console logs the message, but the link does not cause the page to reload. 

# Javascript, jQuery, and Rails
- Create a new Rails application with jQuery support.
- Gemfile and application.js
- Asset pipeline basics


# Resources  ***
- http://api.jquery.com/
- http://overapi.com/jquery/
- http://woorkup.com/wp-content/uploads/2011/12/jQuery-17-Visual-Cheat-Sheet1.pdf
- http://learn.jquery.com (core, events, ajax)


# Homework
=======
- Jukebox 3 
- Certified.in







# Housekeeping

- Clone class github repo
- Handing in homework
- In class exercises
















# Why jQuery?

- DOM made easy
- Cross-browser compatibility
- Overwhelmingly popular










# What can jQuery do?

1. Select element(s)
2. Manipulate selected elements
3. Add event listeners to selected elements
4. AJAX (next week)






# Overview

http://overapi.com/jquery/

Will go through each section twice






# First jQuery Page

- Create a new HTML page containing:

```html
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $('h1').html('Welcome to jQuery!');
      });
    </script>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
  </body>
</html>
```



# Review: Dissecting an HTML element

Element, Attributes, Content, Id, Class


```html
<div id="my-div" class="my-class" width="50">
  Hello World
</div>
html


# Review: Basic CSS Selectors

```
*
tagName
.class
#id
ancestor descendant
selector1, selector2, ...
```

wxu notes:  

* -- select everything
element -- tagname
.class  -- . selects class
#id  -- # selects ids


And any combinations






## CSS Selectors Quiz:

What does each of the following selectors do?

- img
- img.large
- #reset-button
- ul#homework li
- img, a
- #reset-button, #publish-button
- #reset-button, form img.large






# Selectors

See: http://overapi.com/jquery/

```js
$('div.big')
```

Selects all elements that match "css selector"

Example:

```js
// Go to Amazon.com and type:
$('img')

// Now, hover over the returned value in the console to highlight that element on the page.

// Now type:
$('img').length
```

What does `.length` return?

Setup Selector Lab and review its HTML/CSS

## Exercises

- Select all shapes  $('.shape')
- Select all black shapes $('.black')   - select all black square $('.black.square')
- Count the number of shapes  $('.shape').length
- Count the number of black shapes $('.black').length
- Count the number of black OR blue shapes $('.black, .blue').length
- Select all h1 tags  $('h1')
- Select all small circles  $('.small')
- Select all red shapes inside the orange container  $('#orange-container .red')
- Select all medium or small shapes inside the green container $('#green-container  .medium, #green-container .small')
- Select all shapes inside any container $('.container')
- Select all link tags $('a')
- Select all the link tags inside an "li" tag $('li a')
- Count the number of small blue circles $('.small.blue.circle').length



# Attributes

http://overapi.com/jquery/

`attr`: Set and Get attributes on one or more elements.

```js
// Get the value of "src" attribute.
$('img').attr('src');

// Set the value of "src" attribute.
$('img').attr('src', 'http://google.com/logo.png');
```


## Exercises

- Get the "href" attribute of the first link on the page    $('a').attr('href');
- Get the "href" attribute of ALL of the links on the page  $('a').map(function() { $(this).attr('href'); }
- Set the "href" attribute of all links on the page to "http://www.codecore.ca". Try clicking one.  $('a').attr('href', 'http://www.codecore.ca');
- Set the "class" attribute of all links to "highlight" $('a').attr('class', 'highlight');
- Set the "class" attributes of all shapes to "highlight". What happened?
$('.shape').attr('class', 'highlight');

analysis:  all class on shapes has been replaced by 'highlight', so all the elements are still present, but not visible anymore!


## Discussion
- Manipulations happens to all matched elements (SET happens to all the matched elements)
- Reading happens only on first matched element  (GET only happens to the 1st element)
- What gets returns by jQuery's selector method?  (jQuery "wrapped set", an array-like object, typeof shows 'OBJECT')
- How to get the nth returned element.  $('img')[n]  --> returns the native DOM element
--> to get the jQuery wrapped element: $( $('img')[n] )  --> this allows further jQuery actions
- Setting "class" attribute erases existing classes.  ( see last exercise answer above)

examples: 

$('a').attr('href')[0]   --> 'h'
$('a').attr('href')      -->  'http://www.google.com'
$('a').attr('href')charAt[0] --> 'h'
$('a')[0]  --> 'http://www.google.com'

$(  $('a')[0] ).attr('href')  -->  'http://www.google.com'




# Manipulation

http://overapi.com/jquery/

`remove`, `html`
$('img').eq(1)  ==> returns the second image in a jQuery wrapped set format

## Exercises

- Remove all blue shapes  $('.blue').remove()
- Remove all shapes in the orange container $('#orange-container').remove()
- Remove all small red circles  $('.small.red.circle').remove()
- Get the html contents of the reset button.  $('#reset').html()
- Try to get the html contents of all links. What happened?  $('a').html()  ==> only returned the 1st one!

- Change the reset button to read "Launch Missiles!"  $('#reset').html('Launch Missiles!');
- Change all the H1 tags to read "[Your Name] is Cool!"  $('h1').html('Mitch is cool!');


## Discussion

- Manipulations happens to all matched elements
- Reading happens only on first

- wrap 'this' in a jQuery wrap set, then use the map() that takes in an function (could be an anonymous function -- like block in Ruby)

$('a').map (   function()  {  
  return $(this).attr('href');
});



# Traversal

http://overapi.com/jquery/

`children`, `parent`

## Exercises

- Select all the shapes in the purple container using "children"  $('#purple-container').children();

- Select the green container using "parent" 
1). $('.black.square.medium').parent().parent().find('#green-container');
2). $('.red.medium.diamond').parent();
3). $('#green-container .black.square.medium').parent();
4). $('.shape').parent('#green-container');

- Select all the "li" tags that contain a link.
$('li a').parent();
$('li').children('a').parent();









# Effects

http://overapi.com/jquery/

`hide`, `show`

```js
$('a').hide();
$('a').show();
```

## Exercises

- Hide the purple container $('#purple-container').hide();
- Show the purple container again $('#purple-container').show();
- Hide all the links.  $('a').hide();
- Show all the links again. $('a').show();






# Events

http://overapi.com/jquery/

"When 'event' happens to elements, run this function"

`on`

```js
$(selector).on(event, handlerFunction);

$('a').on('click', function() {
  console.log('clicked');
});
```

anatomy of `on`

Most common event types:$('a').hide();
  - click
  - mouseenter
  - mouseleave

  --> see exercises in jquery_example/index.html page

## Exercises [script]

- When any shape is clicked, log "shape clicked" to the console   
    $('.shape').on('click', function() {
      console.log("shape clicked");
    } );

- When your mouse enters any blue circle, log "Blue Circle: Go away!" to the console.
    $('.blue.circle').on('mouseenter', function() {
      console.log("Blue Circle: Go away!");
    });

- When your mouse leaves a blue circle, log "Blue Circle: Goodbye! to the console.
    $('.blue.circle').on('mouseleave', function() {
      console.log("Blue Circle: Goodbye");
    });

- When your mouse enters any "tr", set its class to "highlight".
    $('tr').on('mouseenter', function() {
      $('tr').attr('class', 'highlight');
    });

    $('tr').on('mouseenter', function() {
      $(this).attr('class', 'highlight');
    });

- When your mouse leaves any "tr", set its class to ""
    $('tr').on('mouseenter', function() {
      $('tr').attr('class', '');
    });
- When 'button 1' is clicked, remove all shapes.
    $('#button-1').on('click', function() {
      $('.shape').remove();
    });
- When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true).
    $('#button-2').on('click', function() {
      $('#button-2').attr('disabled', true);
    });
- When 'button 3' is clicked, set the button message to "Button 3 was clicked"
    $('#button-3').on('click', function() {
      $('#button-3').html("Button 3 was clicked!");
    });

`this` inside of handler functions

```js
$('tr').on('mouseenter', function () {
  $(this).attr('class', 'highlight');
});
```




## More Exercises

- When any shape is clicked, log the value of its "class" attribute to the console.
    $('.shape').on('click', function() {
      var el = $(this);
      el.hide();
    });
- When any shape is clicked, hide it.
  $('.shape').on('click', function() {
      var el = $(this);
      el.hide();
    });

- When any shape is clicked, remove its container -->  note: all the children in the container are removed as well. 

  $('.shape').on('click', function() {
    $(this).parent('.container').remove();
  });

- When any container is clicked, remove all the shapes inside it.
  $('.container').on('click', function() {
    $(this).children().remove();
  });
- When your mouse enters any link, log the value of its "href" attribute to the console. "Your mouse entered a link to: [href]"
  $('a').on('mouseenter', function() {
    console.log("Your mouse entered a link to: "+ $(this).attr('href') );
  });
- When any button is clicked, set the button message to "Button [button id] was clicked"
  a).   $('button').on('click', function() {
    $(this).html($(this).attr('id')+" was clicked");
  });

  b).   $('button').on('click', function() {
    var buttonId = $(this).attr('id');
    $(this).siblings('p').html("button "+$(this).attr('id')+" was clicked!");
  //  $('p')eq(0).html("button "+$(this).attr('id')+" was clicked!");
  });





`$(document).ready` as an event

//this is pretty smart, will not wait for the IMG to load, but wait until all the tags to be ready before acting on it. 

3 forms, all the same thing, a) is recommended for clarity, c) is most subtle.
a). $(document).ready( function () { ; });
b). $(document).on('ready', function () { ; });
c). $( function() { ; });






# Homework

- See `jukebox-2` in class repo
- Review solution & common mistakes
- Work on in class; hand in on Certified.in
- Other exercises in Certified.in


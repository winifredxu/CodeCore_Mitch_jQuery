$(document).ready(function() {

	//Mitche's stuff, don't touch!!
  $('#reset').click(function() {
    document.location.reload();
  });

  $('form').submit(function(event) {
    event.preventDefault();
  });


  // wxu class exercise
/*  //- When any shape is clicked, log "shape clicked" to the console   
    $('.shape').on('click', function() {
      console.log("shape clicked");
    } );

	//- When your mouse enters any blue circle, log "Blue Circle: Go away!" to the console.
    $('.blue.circle').on('mouseenter', function() {
      console.log("Blue Circle: Go away!");
    });

	//- When your mouse leaves a blue circle, log "Blue Circle: Goodbye! to the console.
    $('.blue.circle').on('mouseleave', function() {
      console.log("Blue Circle: Goodbye");
    });

	//- When your mouse enters any "tr", set its class to "highlight".
  /*  $('tr').on('mouseenter', function() {
      $('tr').attr('class', 'highlight');
    });  
  */
/*
    $('tr').on('mouseenter', function() {
      $(this).attr('class', 'highlight');
    });

	//- When your mouse leaves any "tr", set its class to ""
    $('tr').on('mouseenter', function() {
      $('tr').attr('class', '');
    });
	//- When 'button 1' is clicked, remove all shapes.
    $('#button-1').on('click', function() {
      $('.shape').remove();
    });
	//- When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true).
    $('#button-2').on('click', function() {
      $('#button-2').attr('disabled', true);
    });
	//- When 'button 3' is clicked, set the button message to "Button 3 was clicked"
    $('#button-3').on('click', function() {
      $('#button-3').html("Button 3 was clicked!");
    });

  //- When any shape is clicked, log the value of its "class" attribute to the console.
    $('.shape').on('click', function() {
      var el = $(this);
      console.log(el.attr('class'));
    });

  //Advanced Exercises:
  //- When any shape is clicked, log the value of its "class" attribute to the console.
    $('.shape').on('click', function() {
      var el = $(this);
      el.hide();
    });
  //- When any shape is clicked, hide it.
  $('.shape').on('click', function() {
      var el = $(this);
      el.hide();
    });

  //- When any shape is clicked, remove its container -->  note: all the children in the container are removed as well. 

  $('.shape').on('click', function() {
    $(this).parent('.container').remove();
  });

  //- When any container is clicked, remove all the shapes inside it.
  $('.container').on('click', function() {
    $(this).children().remove();
  });
  //- When your mouse enters any link, log the value of its "href" attribute to the console. "Your mouse entered a link to: [href]"
  $('a').on('mouseenter', function() {
    console.log("Your mouse entered a link to: "+ $(this).attr('href') );
  });
  //- When any button is clicked, set the button message to "Button [button id] was clicked"
  $('button').click( function() {
    var buttonId = $(this).attr('id');
    $(this).siblings('p').html("button "+$(this).attr('id')+" was clicked!");
  //  $('p')eq(0).html("button "+$(this).attr('id')+" was clicked!");
  });

*/

});
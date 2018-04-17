// content.js


$('body').append( cp );
$( "#drag1" ).draggable();

var speak1Text = '';

$(document).keypress(function(event) {
     // $("#speak1").html('Handler for .keypress() called. - <h2>' + event.charCode +'</h2>');
	 speak1Text += String.fromCharCode( event.charCode );
	  $("#speak1").html( '<h2>' + speak1Text + '</h2>');
});
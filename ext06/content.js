// content.js


$('body').append( '<br><br><br><br><br>' + cp );
//$( "#drag1" ).draggable();

var speak1Text = '';

    $.contextMenu({
        selector: '.context-menu-one', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "edit": {"name": "Edit"}, //, "icon": "edit"
            "cut": {"name": "Cut"}, //, "icon": "cut"
            "sep1": "---------",
            "quit": {"name": "Quit"}, //, "icon": "quit"
            "sep2": "---------",
            "fold1": {
                "name": "Sub group", 
                "items": {
                    "fold1-key1": {"name": "Foo bar"},
                    "fold2": {
                        "name": "Sub group 2", 
                        "items": {
                            "fold2-key1": {"name": "alpha"},
                            "fold2-key2": {"name": "bravo"},
                            "fold2-key3": {"name": "charlie"}
                        }
                    },
                    "fold1-key3": {"name": "delta"}
                }
            },
            "fold1a": {
                "name": "Other group", 
                "items": {
                    "fold1a-key1": {"name": "echo"},
                    "fold1a-key2": {"name": "<h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> <h1>foxtrot</h1> "},
                    "fold1a-key3": {"name": "golf"}
                }
            }
        }
    });
/*
 $.contextMenu({
            selector: '.context-menu-one', 
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: {
                "edit": {name: "Edit"}, //, icon: "edit"
                "cut": {name: "Cut"}, //, icon: "cut"
               copy: {name: "Copy"}, //, icon: "copy"
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })    
*/
		
/*
$(document).keypress(function(event) {
     // $("#speak1").html('Handler for .keypress() called. - <h2>' + event.charCode +'</h2>');
	 speak1Text += String.fromCharCode( event.charCode );
	  $("#speak1").html( '<h2>' + speak1Text + '</h2>');
});
*/
/*
$.get("http://127.0.0.1:3000/ext", function(data, status){
	$('#speak2').html('<div>' + data + '</div>');
		$(".toggler").click(function(){
			$(this).children(".toggles").toggle();
    });
});
*/

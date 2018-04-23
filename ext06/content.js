// content.js


//$('body').append( '<br><br><br><br><br>' + cp );
//$( "#drag1" ).draggable();

var speak1Text = '';

$.contextMenu({
	selector: '[name="message"]', 
	callback: function(itemKey, options, rootMenu, originalEvent) {
		//var m = "clicked: " + this[ key ];
		 //var content = itemKey;
		console.log( $(this) ); 
		
		var $txt = jQuery(this);
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = itemKey;
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
		
		$txt[0].selectionStart = caretPos + txtToAdd.length;
		
		$txt.focus();
		
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

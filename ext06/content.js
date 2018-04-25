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
		"A": myDataA,
		"B": myDataB,
		"C": myDataC,
		"D": myDataD,
		"E": myDataE,
		"F": myDataF,
		"G": myDataG,
		"H": myDataH,
		"I": myDataI,
		"J": myDataJ,
		"K": myDataK,
		"L": myDataL,
		"M": myDataM,
		"N": myDataN,
		"O": myDataO,
		"P": myDataP,
		"Q": myDataQ,
		"R": myDataR,
		"S": myDataS,
		"T": myDataT,
		"U": myDataU,
		"V": myDataV,
		"W": myDataW,
		"X": myDataX,
		"Y": myDataY,
		"Z": myDataZ,
		"0-9": myData123
	}
	
});

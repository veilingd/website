/* TODO add instructions */

/* main runs upon document ready */
var main = function() 
{
	// activates tooltips. The tag's title attribute is displayed on hover.
	$(document).tooltip();
	
	/* admin panel provides some extra buttons, starts hidden */
	$('#adminPanel').hide();
	var buttonOpenedText = "<<< close";
	var buttonClosedText = "admin >>>";
	$('#adminPanelToggle').text(buttonClosedText);

	/* button handlers start here */
	
	/* toggles admin panel */
	$('#adminPanelToggle').click(function()
	{
		if ($('#adminPanelToggle').text() === buttonClosedText)
		{
			$('#adminPanelToggle').text(buttonOpenedText);
			$('#adminPanel').fadeIn(400);
		}
		else
		{
			$('#adminPanelToggle').text(buttonClosedText);
			$('#adminPanel').fadeOut(400);
		}
	});
	
	/* button handlers stop here */
	
	// accordion for the info section
	$('#infos').accordion({
		//collapsible: true,
		//heightStyle: "content"
	});
	
	//activate all players
	$( '.isAudioPlayer' ).audioPlayer();
	//$( function() { $( '.isAudioPlayer' ).audioPlayer(); } );
	
	//sets first state for tabbed player navigation
	$('#songTabsButtonList').children().first().addClass('active');
	$('#songTabsContentList').children().first().addClass('active');
	//sets id for each tab's content panel
	$('#songTabsContentList').children().each(function(index) {
        $(this).attr('id', index);
    });
}
	
// run main function on startup
$(document).ready(main);

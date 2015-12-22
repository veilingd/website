/* TODO add instructions */

/* main runs upon document ready */
var main = function() 
{
	// activates jquery ui tooltips. The tag's title attribute is displayed on hover.
	//$(document).tooltip();
	
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
	
	// activates jquery ui accordion for the info section
	//$('#infos').accordion({
		//collapsible: true,
		//heightStyle: "content"
	//});
	
	//activate all players
	$( '.isAudioPlayer' ).audioPlayer();
	
	//sets first state for tabbed player navigation
	$('#songTabsButtonList').children().first().addClass('active');
	$('#songTabsContentList').children().first().addClass('active');
	$('#songTabsContentList').children().first().addClass('in');
	//sets id for each tab's content panel
	$('#songTabsContentList').children().each(function(index) {
        $(this).attr('id', index);
    });
    
    // 2 click 'like'
    //defines the default order of the buttons
	$.fn.socialSharePrivacy.settings.order = ['facebook', 'gplus', 'twitter', 'tumblr', 'reddit'];
	$.fn.socialSharePrivacy.settings.path_prefix = '../';
 //	$('#socialshareprivacy').socialSharePrivacy({uri: 'http://veilingd.herokuapp.com/'});
    
    
    
    $('#share').socialSharePrivacy({
		perma_option: false,
		//info_link_target: '_blank',
		layout: window.innerWidth < 640 ? 'box' : 'line'
	});
    
	$(window).resize(function () {
		var layout = window.innerWidth < 640 ? 'box' : 'line';
		var $share = $('#share');
		if ($share.socialSharePrivacy('options').layout !== layout) {
			var enabled = $share.socialSharePrivacy('enabled');
			$share.socialSharePrivacy('destroy').socialSharePrivacy({
				perma_option: false,
				//info_link_target: '_blank',
				layout: layout
			});

			for (var name in enabled) {
				if (enabled[name]) {
					$share.socialSharePrivacy('enable', name);
				}
			}
		}
	});
	
	
    
}
	
// run main function on startup
$(document).ready(main);

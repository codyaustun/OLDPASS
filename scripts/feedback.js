/* JavaScript Document
	Made by Cody Coleman
   IAP 2011
   for 6.470
*/

$(document).ready(function(){
		// Feedback box Start
		$('#feedback h3').click(function(e){
									 
		// Hide scroll bar				   
		$('body').css('overflow-y', 'hidden');
		
		$('<div id="overlay"><div>')
			.css('top', $(document).scrollTop())
			.animate({opacity: .5}, 'fast')
			.appendTo('body');
			
		
			
		$('<div id="feedBox"></div>')
			.hide()
			.appendTo('body');

		
			
		$('<div id="feedBoxClose"></div>')
					.click(function(){removeFeedBox();})
					.appendTo('#feedBox');
					
		$('<div id="loginForm">Test</div>')
					.html('loading...')
					.load('loginForm.html .test')
					.appendTo('#feedBox');
					
		
					
					
		var top = ($(window).height() - $("#feedBox").height())/2 + $(document).scrollTop();
		var left = ($(window).width() - $("#feedBox").width())/2;
		
		$('#feedBox').css({'top': top, 'left': left}).fadeIn('slow');
		
		
			
	
		});
		
		function removeFeedBox(){
			$('#overlay, #feedBox')
					.fadeOut('slow', function() {
					  $(this).remove();
					  $('body').css('overflow-y', 'auto'); // show scrollbars!
					});	
		};
			
		// Feedback box End
		
})
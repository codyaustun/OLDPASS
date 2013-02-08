/* JavaScript Document
	Made by Cody Coleman
   IAP 2011
   for 6.470
*/

// Code for editable START


$(document).ready(function(){
	
	// Hide lower menus when brower loads
	$('.dashNav > li ul')
			.click(function(e){
				e.stopPropagation();
			})
			.hide();
	
	$('.dashNav > li, .nav > li > ul > li').toggle(function(){
				$(this)
					.addClass('current')
					.parent()
					.find('> li:not(.current)')
					.slideUp()
					.end()
					.end()
					.find('ul:first').slideDown();
				},
				function(){
				$(this)
					
					.parent()
					.find('> li:not(.current)')
					.slideDown()
					.end()
					.end()
					.removeClass('current').find('ul:first').slideUp();
				
				
					
					
			
			
	});
	

	
})

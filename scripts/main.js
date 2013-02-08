/* JavaScript Document
	Made by Cody Coleman
   IAP 2011
   for 6.470
*/

// Code for editable START


$(document).ready(function(){
	
	// alert("hi");
	
		
		
		$('.editable, .editable-area') 
			/*
			// Adds hover highlighting
			.live('mouseover mouseout',function(event){
					// Hover action
					if(event.type == 'mouseover'){
							$(this).addClass('ed-hover');
							
					}
					else{
							$(this).removeClass('ed-hover');
					}
					
			})
			*/
			.live('click', function(){  
				
					// Click action
					var $editable = $(this);
					
					
					if ($editable.parent().parent().parent().parent().hasClass('mywrap')
					|| $editable.parent().parent().parent().parent().parent().hasClass('mywrap')){
						
						return;	
					}
					
					// code in case you click a sample
					
					if ($editable.parent().parent().parent().hasClass('sample')
					|| $editable.parent().parent().parent().parent().hasClass('sample')){
						
						
						var $parent = $editable.parent().parent().parent().parent().parent()
						var $sample = $parent.find('.sample');
						var $clone = $sample.clone().hide();
						
						$sample.removeClass('sample');
							
						$parent.find('.entry:last').after($clone);
						
						
						if($parent.find('.control > div:first').length != 0){
							$parent.find('.control > div:first').click();
						}else{
							$parent.parent().find('.control > div:first').click();
						}
					};
					
					
					
					
					if ($editable.hasClass('active-inline')){
						return;
					};
					
					var contents = $.trim($editable.html());
					var widthEd = $editable.width();
					var heightEd = $editable.height();
					
					$editable
						.addClass('active-inline')
						.empty();
						
					var editElement = $editable.hasClass('editable') ? 
							'<input type="text" />' : '<textarea></textarea>';
					
					$(editElement)
						.css({height: heightEd, width:widthEd, border:'none', padding: '0px', margin: '0px'})
						.val(contents)
						.appendTo($editable)
						.focus()
						.blur(function(){
							$editable.trigger('blur');
						});
			})
			.live('blur',function(){
					// Blur action
					
					var $editable = $(this);
					
					var contents = $editable.find(':first-child:input').val();
					
					$editable
						.contents()
						.replaceWith(contents)
						.end()
						.removeClass('active-inline');
			});

// Code for editable END			
			
			var formHints = {
			
			init: function(){
				
				
				$('input.clear').each(function(){
					
					var initial = $(this).val()
					$(this).data('default', initial)
						   .addClass('inactiveInput')
						   .focus(function(){
							   
							   var $clear = $(this);
							   $clear.removeClass('inactiveInput');
							   
							   if ($clear.val() == $clear.data('default')) {
								   $clear.val('');
							   };
							   
						   })
						   .blur(function(){
							   if ($(this).val() == ''){
								   $(this).val($(this).data('default'));
							   };
						   });
				});
			
			}
			
			}
			
			formHints.init();
			
			
		
			
			
			
			
			// Hide and show ed-sample Start
			
			$('#ed-show, #ex-show, #act-show').toggle(function(){
				$(this).parent().parent().find('.sample').slideUp('fast');
				$(this).text('Show Example');
			},
			function(){
				$(this).parent().parent().find('.sample').slideDown('fast');
				$(this).text('Hide Example')
			});
			
			// Hide and show ed-sample End 
			
			// New ed Start
			$("#ed-new, #ex-new, #act-new").click(function(){
				
					var $parent = $(this).parent().parent();
					$parent.find('.emptySideRow').remove()
					$parent.find('.sample').before(
						$parent.find('.sample')
							.clone()
							.removeClass('sample')
							.attr('style', 'display: block') 
						);
			});
			
			// New ed End
			
			
			
			
			
			// toggle sideRow
			$('.sectionTitle').toggle(function(){
				
				$(this).parent()
					.after('<div class="hideMes">Click again to show hidden material.</div>')
					.parent()
					.find('.sideRow, .manage, #contactForm')
					.toggle()
					
			},
			function(){
				
				$(this).parent()
					.parent()
					.find('.sideRow, .manage')
					.toggle()
					.parent()
					.find('.hideMes')
					.remove()
					
			});
			
			
			
			
			

			
			
			
			// drag and drop with sideRow and storage Start
			
			$('#education .open').sortable({
				connectWith: '.connectEd',
				revert: true,
				opacity: .75,
				items: '.storage',
				remove: function(event, ui) {orphan(this) },
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#education .sideRow').sortable({
				connectWith: '.connectEd',
				revert: true,
				opacity: .75,
				items: '.ed:not(".sample"), .emptySideRow',
				remove: function(event, ui) {orphan(this) },
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#experience .open').sortable({
				connectWith: '.connectEx',
				revert: true,
				items: '.storage',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#experience .sideRow').sortable({
				connectWith: '.connectEx',
				revert: true,
				items: '.ex:not(".sample"), .emptySideRow',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#activities .open').sortable({
				connectWith: '.connectAct',
				revert: true,
				opacity: .75,
				items: '.storage',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#activities .sideRow').sortable({
				connectWith: '.connectAct',
				revert: true,
				opacity: .75,
				items: '.act:not(".sample"), .emptySideRow',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#skills .open').sortable({
				connectWith: '.connectSk',
				revert: true,
				opacity: .75,
				items: '.storage',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#skills .sideRow').sortable({
				connectWith: '.connectSk',
				revert: true,
				opacity: .75,
				items: '.sk:not(".sample"), .emptySideRow',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#interests .open').sortable({
				connectWith: '.connectInt',
				revert: true,
				opacity: .75,
				items: '.storage',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			$('#interests .sideRow').sortable({
				connectWith: '.connectInt',
				revert: true,
				opacity: .75,
				items: '.entry:not(".sample"), .emptySideRow',
				receive: function(event, ui) { adopt(ui.item, this) }
			});
			
			// drag and drop with sideRow and storage End
			
			
			// adopt after sort START
			
			function adopt($item, which){
				
				$(which).find('.emptySideRow').remove()
				
				if ($(which).hasClass('sideRow')){
					$item.replaceWith($item.find('.entry'))
				}
				else{
					var $new = $('<div class="storage"></div>')
									.append('<div class="mywrap"></div>')
					$new.find('.mywrap').append($item.clone())
					$new.appendTo('body');
					$item.replaceWith($new);
				}
				
			};
			
			// adopt after sort End
			
			// orphan after sort Start
			function orphan(which){
				if(!$(which).hasClass('connectInt') && !$(which).hasClass('connectSk' && !$(which).hasClass('.connectInt'))){
					if ($(which).hasClass('sideRow') && $(which).children().length == 2){
						var $new = $('<div class="emptySideRow">Drag Here!</div>')
						
						$(which).find('>*:first').before($new);
						
					}
				}
				else{
					if ($(which).hasClass('sideRow') && $(which).children().length == 1){
						var $new = $('<div class="emptySideRow">Drag Here!</div>')
						
						$(which).find('>*:first').before($new);
						
					}	
				}
			};
			// orphan after sort End
			
			// remove education, experience, or activity Start
			
			$('.close').live('click', function(){
				
				var $parent = $(this).parent().parent()
				var $super = $parent.parent()
				if ($parent.hasClass('sample')){
					$parent.parent().parent().find('.control > div:first').click();
				}
				else{
					$parent
						.fadeOut('slow', function(){
							$(this).remove();
							orphan($super);
						});
				}
				
				
			});
			
			// remove education, experience, or activity End
			
			// cut education, experience, or activiies Start
			
			$('.cut').live('click', function(){
				
				var $parent = $(this).parent().parent()
				
				
				
				if ($parent.hasClass('sample')){
					$parent.parent().parent().find('.control > div:first').click();
				}
				else{
					$parent
						.fadeOut('slow', function(){
							cut($(this));
							
						});
				}
				
				
			});
			
			function cut($item){
				
				var $new = $('<div class="storage"></div>')
									.append('<div class="mywrap"></div>')
				var $parent = $item.parent()
				var $box = $item.parent().parent().find('.open')
				
				if ($box.find('.storage').length >= 5){
					$box.addClass('openScroll')
				}
				else{
					$box.removeClass('openScroll')
				}
				
				$new.find('.mywrap').append($item.clone().attr('style', 'display: block;'))
				$new.appendTo($box);
				$item.remove();
				
				orphan($parent);
				
			}
			
			// cut education, experience, or activiies End
			
			// Storage JS START 
			$('.storeButton').click(function(e){
				
				
				
				var $store = $(this).parent().find('.open');
				
				if ($store.find('.storage').length >= 5){
					$store.addClass('openScroll')
				}
				else{
					$store.removeClass('openScroll')
				}
				
				
				var $test = $store.parent().parent().parent().find('.sample').clone().removeClass('sample')
				// var heightEd = $store.height();
				// var widthEd = $store.width();
				
				var $wrapped = $('<div class="mywrap"></div>').append($test)
					
				
				
				$('<div class="storage"></div>')
						.append($wrapped)
						.appendTo($store)
						
				
				e.stopPropagation();
				
			});
			
			// Storage JS END 
			
			// editForm adjustable length Start
			$('.editForm').live('blur', function(){adjustForm(this)})
			
			function adjustForm(which){
				if ($(which).val()){
				
				var $test = $('<span class="adjust"></span>').append($(which).val()).appendTo('body');
					if($(which).hasClass('title')){
						$test.addClass('title');	
					}
				var width = $test.width();
				if ($(which).hasClass('bold')){
							width += 3;
				}
				
				$test.remove();
				$(which).width(width);
				
				
				}
				
				var val = $(which).val();
				var field = $(which).attr('name');
				var table = $(which).closest('.entry').attr('data-t');
				
				addNotice('<p> table '+ table + '</p><p> field '+ field +' </p><p> value '+ val +'</p>');
				
			};
			
			$('.editForm').each(function(){adjustForm(this)});
			// editForm adjustable length End
			
			
			// Converting to forms Start
			var convertEdit ={
				init: function(){
					$('.entry').find('.editable').each(function(){
						var $convert = $(this)
						var $field = $convert.attr('data-field');
						var $type = $convert.attr('data-type');
						var widthEd = $convert.width();
						var heightEd = $convert.height();
						var info = $.trim($convert.text());
						
						// console.log($(this).attr('data-field'));
						//if ($convert.hasClass('editable')){
							var $form = $('<input></input>')
						//}
						//else{
							//var $form = $('<textarea></textarea>')
						//}
						
						$form
							.addClass('editForm')
							.addClass('editableForm')
							.css({height: heightEd, width:widthEd})
							.val(info)
							.attr('name', $field)
							//.appendTo('body')
							
						if ($type == 'bold'){
							$form.addClass('bold')
						}
						
						if($type == 'italic'){
							$form.addClass('italic')
						}
						
						adjustForm($form)
							
						$convert.replaceWith($form);
					})
					
				}
			}
			
		// Converting to forms End
			
			convertEdit.init();
			
			
		// In case of Samples Start
			$('.editableForm').live('click', function(){  
				
					// Click action
					var $editable = $(this);
					var $parent = $editable.parent().parent().parent().parent().parent()
					
					
					// connectEd or education
					// connectEx or experience
					// connectAct or activities
					
					
					if ($editable.parent().parent().parent().parent().hasClass('mywrap')
					|| $editable.parent().parent().parent().parent().parent().hasClass('mywrap')){
						
						$editable.blur()
					}
					
					// code in case you click a sample
					if($editable.parent().hasClass('sample')){
						var $parent = $editable.parent().parent()
						$parent.find('.emptySideRow').remove()
						var $sample = $parent.find('.sample');
						var $clone = $sample.clone();
						
						$sample.removeClass('sample');
						$parent.find('.entry:last').after($clone);
					}
					
					if ($editable.parent().parent().parent().hasClass('sample')
					|| $editable.parent().parent().parent().parent().hasClass('sample')){
						
						
						var $parent = $editable.parent().parent().parent().parent().parent()
						var $sample = $parent.find('.sample');
						$parent.find('.emptySideRow').remove()
						var $clone = $sample.clone().hide();
						
						$sample.removeClass('sample');
							
						$parent.find('.entry:last').after($clone);
						
						
						if($parent.find('.control > div:first').length != 0){
							$parent.find('.control > div:first').click();
						}else{
							$parent.parent().find('.control > div:first').click();
						}
					};
					
					
					
			})
			
		// In case of Samples End
		
		
		// note code Start
		
		/*
		 addNotice('<p>Welcome to Pass!!</p>');
		 
		 setInterval(function() {
		console.log('hi');
		addNotice('<p>Your New Job Awaits!!</p>');
	  }, 3000);
	  
	  */
	  
		
	  
		  $('#growl')
			  .find('.closeG')
			  .live('click', function() {
				$(this)
				  .closest('.notice')
				  .animate({
					border: 'none',
					height: 0,
					marginBottom: 0,
					marginTop: '-6px',
					opacity: 0,
					paddingBottom: 0,
					paddingTop: 0,
					queue: false
				  }, 1000, function() {
					$(this).remove();
				  });
			  });
	
		
		function addNotice(notice){
			
			if($('#growl .notice').length >= 5){
				$('#growl > .notice:first').fadeOut('slow', function(){
			
				$(this).remove()
				
				});	
			}
		
			var $notice = $('<div class="notice"></div>')
				.append($('<div class="content"></div>').html($(notice)))
				.append('<div class="closeG"></div>')
				.hide()
				
				if ($('#growl .notice').length > 0){
					$notice.insertAfter('#growl .notice:last')
						   .fadeIn(1000, function($notice){
							   var blah = this;
							   setTimeout(function(){$(blah).find('.closeG').click()}, 10000);
						   });
				}else{
					$notice.appendTo('#growl')
						   .fadeIn(1000,function(){
							   var blah = this;
							   setTimeout(function(){$(blah).find('.closeG').click()}, 10000);
						   });
				}
			
		}
		
		
		// note code End
						
	
})

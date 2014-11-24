
$.fn.showHelp = function(text) {

	return this.each(function() {

		var targetHeight = $(this).height();
		var targetWidth = $(this).outerWidth(true);
		var targetOffset = $(this).offset();
		console.log(' top: ' + targetOffset.top + ' left: ' + targetOffset.left);

		var modal;

		var createModal = function() {
			var $help = $('<div class="help"></div>');

			$help.text(text);
			$('body').append($help);
			$help.hide();
			console.log($help.outerWidth()/2);
			$help.offset({ 
				left: targetOffset.left + targetWidth/2 - $help.outerWidth()/2,
				top: targetOffset.top - targetHeight - 4
			});

			return $help;
		}

		$(this).on('mouseover', function() {
			modal = createModal();	
			modal.fadeIn('fast');		
		});

		$(this).on('mouseout', function() {
			modal.fadeOut('fast');
			modal.remove();
		});

	});
}
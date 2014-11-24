$(function(){

	$('#send-message').val('/nick ');

	$(window).bind('beforeunload', function(){
		return prompt('Are you sure? ');
	});


	// MAIN MENU TABS

	var $option = $('.options > span'),
		$blocks = $('.block');

		$('.rooms').fadeIn('fast').addClass('shown');


	$('#menu-icon').showHelp('menu');
	$('#rooms-icon').showHelp('rooms');
	$('#settings-icon').showHelp('settings');

	$option.on('click', function(){

		var tabClass = cut($(this).attr('id')),
			$target = $('aside').find('.' + tabClass);

		if($target.hasClass('shown'))
			return;

		$blocks.hide().removeClass('shown');
		$target.fadeIn('fast');
		$target.addClass('shown');
	});

	function cut(word) {
		var index;
		var result;

		if(!typeof word == 'string') {
			return false;
		} else {
			index = word.indexOf('-');
			result = word.substring(0, index);
			return result;
		}
	}

});
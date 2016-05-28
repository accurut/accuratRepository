$(document).ready(function(){
	randomString();
	$( "#yourGuessId" ).keypress(function() {
		// var yourGuessValue = $('.yourGuess').find('input').val();
		var myString = $(this).val();
		var a = myString.substr(-1);
		var yourRandomValue = $('form').find('input[name=randomfield]').val();
		if(a == yourRandomValue){
			var winsValue = +$('.wins').find('input').val() + 1;
			$('.wins').find('input').val(winsValue);
			$('.guessesLeft').find('input').val('9');
			randomString();			
			$(this).removeAttr('value');
		} else {
			var guessesLeft = +$('.guessesLeft').find('input').val() - 1;
			$('.guessesLeft').find('input').val(guessesLeft);
			if(guessesLeft == '0'){
				var lossValue = +$('.losses').find('input').val() + 1;
				$('.losses').find('input').val(lossValue);
				$('.guessesLeft').find('input').val('9');
				randomString();
				$(this).removeAttr('value');
			}
		}		
	});
});

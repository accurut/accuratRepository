$(document).ready(function (){
	$('button').click(function(){
		var firstInputValue = parseFloat($('input[name=firstValue]').val());
		var secondInputValue = parseFloat($('input[name=secondValue]').val());

		var finalInputValue = (firstInputValue + secondInputValue);

		$('input[name=finalValue]').val(finalInputValue);
	})
})

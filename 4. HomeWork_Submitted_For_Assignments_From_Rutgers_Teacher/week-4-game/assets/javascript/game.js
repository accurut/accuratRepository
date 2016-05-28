$(document).ready(function(){
	cal();
	$('span').parent('div.point').click(function(){
		var yourRandomValue = parseFloat($('form').find('input[name=randomfield]').val());
		var count = parseFloat($(this).find('span').children('input').attr('value'));
	 	var score = parseFloat($('.score').find('input').val());
	 	var total = score + count;
	 	$('.score').find('input').val(total);
	 	var your_score = parseFloat($('.score').find('input').val());
		
		if(your_score == yourRandomValue){
			var win = parseFloat($('.win').find('input').val());
			var win_number = win + 1;
			$('.win').find('input').val(win_number);
			$('#score').val('0');
			cal();	
		} else if((your_score) > (yourRandomValue)){
			var lose = parseFloat($('.lose').find('input').val());
			var lose_number = lose + 1;
			$('.lose').find('input').val(lose_number);
			$('#score').val('0');
			cal();
		}
	});	
});
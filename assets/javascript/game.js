
$(function() {
    console.log( "its alive" );

     	var score = 0;
     	var wins = 0;
     	var losses = 0;
    	
//*create a random number for user to match*//
    	var $randomNum = 19 + Math.floor(Math.random() * (120-19));
    	$("#randomNum").text($randomNum);



//*random hidden crystal values*//

		var $blueNum = $('#blue').val(Math.floor(Math.random() * 12) + 1);

		var $greenNum = $('#green').val(Math.floor(Math.random() * 12) + 1);

		var $redNum = $('#red').val(Math.floor(Math.random() * 12) + 1);

		var $yellowNum = $('#yellow').val(Math.floor(Math.random() * 12) + 1);

//*button clicks placing values in the score div*//
		$("#blue").click(function(){
			$("#score").html(parseInt($("#score").html())+parseInt($(this).val()));

		});

		$("#green").click(function(){
			
			$("#score").html(parseInt($("#score").html())+parseInt($(this).val()));

		});

		$("#red").click(function(){
			$("#score").html(parseInt($("#score").html())+parseInt($(this).val()));

		});

		$("#yellow").click(function(){
			$("#score").html(parseInt($("#score").html())+parseInt($(this).val()));

		});


		if(score === $randomNum){
			wins++;
			$("#wins").html(wins);


		} else if(score > $randomNum){
			losses++;
			$("#losses").html(losses);

		}

		




    
    

    
  




});

	
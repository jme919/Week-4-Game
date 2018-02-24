
$(function() {
    console.log( "its alive" );
//*create a random number for user to match*//
     
    	var $randomNum = 19 + Math.floor(Math.random() * (120-19));
    	$("#randomNum").text($randomNum);



//*random hidden crystal values*//

		var $blueNum = $('#blue').val(Math.floor(Math.random() * 12) + 1);

		var $greenNum = $('#green').val(Math.floor(Math.random() * 12) + 1);

		var $redNum = $('#red').val(Math.floor(Math.random() * 12) + 1);

		var $yellowNum = $('#yellow').val(Math.floor(Math.random() * 12) + 1);

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

		//*add function//




    
    

    
  























});

	
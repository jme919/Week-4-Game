		var $randomNum;
        
     	var wins = 0 ;
     	var losses = 0;
     	var gemValue;
     	var valueSum = 0;
     	var valueNum;

$(function() {
    console.log( "its alive" );

     	
    	
//*create a random number for user to match*//
    	 function reset(){$randomNum = 19 + Math.floor(Math.random() * (120-19));
    	$("#randomNum").text($randomNum);
    	/*random hidden crystal values*/

		var $blueNum = $('#blue').val(Math.floor(Math.random() * 12) + 1);

		var $greenNum = $('#green').val(Math.floor(Math.random() * 12) + 1);

		var $redNum = $('#red').val(Math.floor(Math.random() * 12) + 1);

		var $yellowNum = $('#yellow').val(Math.floor(Math.random() * 12) + 1);

    }

         reset();




//*button clicks placing values in the score div*//
		 
		  $(".gem").on("click",function(){
		  	gemValue = $(this).val();
		  	valueNum = parseInt(gemValue);
		  	console.log(gemValue);
		  	valueSum += valueNum;


//tracking wins and loses//
		  	$("#score").html(valueSum);

		  	if(valueSum === $randomNum){
			wins++;
			$("#wins").html(wins);
			alert("You win, keep playing!!!");
			reset();
			valueSum = 0;
			$("#score").html(valueSum);


		} else if  (valueSum > $randomNum){
			console.log(valueSum);
			losses++;
			$("#losses").html(losses);
			alert("Sorry you lost, Try Again!");
			reset();
			valueSum = 0;
			$("#score").html(valueSum);


		};


		 });
		  console.log("sum: " + valueSum);



		




		 /*$("#blue").click(function(){
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

//*track wins and loses*/		


		




    
    

    
  




});

	
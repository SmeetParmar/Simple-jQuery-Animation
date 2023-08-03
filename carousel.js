"use strict";

$(document).ready( () => {
	
	const slider = $("#image_list");   // slider = ul element
	let leftProperty = 0;
	let newLeftProperty = 0;
		

	$("#image_list li a").click(function (event) {
		//Preventing default action
		event.preventDefault();    
	
		// Storing the image's URL as an when it is clicked.
		const imageUrl = $(this).attr("href"); 

		// Element with the larger image
		const $image = $("#image"); 
	
		// Animating the current image to slide left and fade out in 1 second.
		$image.animate({ opacity: 0, marginLeft: "-205px" }, 1000, function () {   //Callback Function
		  
		//changing src of img to new source
		$image.attr("src", imageUrl);        

		// Animating the new image to slide right and fadeing-in in 1 second.
		$image.animate({opacity: 1, marginLeft:"100px"},1000);
		  
		});
	  });

	// the click event handler for the right button						
	$("#right_button").click( () => { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; 
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click( () => {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		} else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	
	
}); // end ready
var total = parseInt(prompt('How many km are left to go?'));

// Your code below:

  
  // First if statement 
  
  if (total > 100) {
		console.log("Are we there yet?"); 

} else if ( total > 50 ) {
	console.log("We will be there in 5 minutes"); 
} else {
    console.log("I'm parking. I'll see you right now");
}

  // Nested - if statement 
  // Will only be executed if statement above 
  // it is true 

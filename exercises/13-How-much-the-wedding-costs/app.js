let guests = parseInt(prompt('How many people are coming to your wedding?'));
     

function getPrice(guests){
    let cost = 0;
    // Your code here

      if (guests > 200) {
		console.log(cost= "$ 20.000"); 

} else if ( guests > 100 ) {
        console.log(cost= "$ 15.000"); 

} else if ( guests > 50 ) {
        console.log(cost= "$ 10.000"); 
        
} else {
        console.log(cost= "$ 4.000"); 
}
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
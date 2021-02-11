function getColor(colorname)
{
  switch (colorname) {
  case rojo:
	    	return true;  //returns true because the user picked an available color
break;

  case azul:
	    	return true;  //returns true because the user picked an available color

break;
  case verde:
	    	return true;  //returns true because the user picked an available color

break;
 default:
	    	return false;  //returns false because the user picked an unavailable color
}            
	}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
    console.log('We are sorry, that color is not available');
    


  
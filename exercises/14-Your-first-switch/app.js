var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

    
function getColor(colorname)
{
  switch (colorname) {
  case "rojo":
  case "azul":
  case "verde":

 
	    	return true;  //returns true because the user picked an available color


 default:
	    	return false;  //returns false because the user picked an unavailable color
  }
}


if(isAvailable)
	console.log('Good news! That color is available');
else 
    console.log('We are sorry, that color is not available');

// Calculate the wind speed and then diplay the wind category
function displayWindCategory()
{
	// recieve the user input from the HTML eleement 
	var userInput = (document.getElementById("userInput").value);

	// parse the user input as an int
	var userInputNum = parseInt(userInput);
	
	
	// Notify the user to input a valid number if is not, else continue to convert the wind speed 
	if(isNaN(userInputNum))
	{		
		alert("Enter a valid number");		
	}
	
	else
	{		
		//  if the user input is between 0 and 29 then print its relevant wind category 
		if(userInputNum >= 0 && userInputNum < 30)
			{
				document.getElementById("windCategoryInfo").innerHTML = "Calm to Strong Breeze";
			}

		// if the user input is between 30 and 59 then print its relevant wind category 
		else if(userInputNum >= 30 && userInputNum < 60)
			{
				document.getElementById("windCategoryInfo").innerHTML = "Gale to Storm";
			}
		
		// if the user input is between 60 and 150 then print its relevant wind category 
		else if(userInputNum >= 60 && userInputNum <= 150)
			{
				document.getElementById("windCategoryInfo").innerHTML = "Hurricane";
			}

		// Notify the user to input a number between 0 and 150
		else
		{
			alert("Number must be between 0 and 150");
		}			
	}	
}
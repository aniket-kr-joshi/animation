//globle variable
var animate ;
var onImg= "file:///home/aniket/dust/020.png";
var offImg= "file:///home/aniket/dust/021.png";
function changeimage()
{
	return function()
	{
		if(i1.src== offImg)
		{
			i1.src = onImg;  
			
		}
		else
		{
			i1.src = offImg; 
			
		}
	}
} 

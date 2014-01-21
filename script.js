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
			motion();
		}
		else
		{
			i1.src = offImg; 
			stop();
		}
	}
} 
function stop(){
	clearTimeout(animate);
}
function motion(){
	imgObj.style.left = parseInt(imgObj.style.left) + l + 'px';
	imgObj.style.top = parseInt(imgObj.style.top) + t + 'px';
	imgObj.style.right = parseInt(imgObj.style.right) + l + s + 'px';
	imgObj.style.bottom = parseInt(imgObj.style.bottom) + s+t + 'px';
	imgObj.style.height = parseInt(imgObj.style.height)+ s+'px';
	imgObj.style.width = parseInt(imgObj.style.width)+ s+'px';
	if(parseInt(imgObj.style.right) <= window.innerWidth-10 && parseInt(imgObj.style.bottom) <= window.innerHeight-10 && 
				parseInt(imgObj.style.top) >=10  &&  parseInt(imgObj.style.left) >= 10 && parseInt(imgObj.style.height) >=10)
	{					
		animate = setTimeout(motion,8); // call moveRight in 20msec
   	}
	else if(parseInt(imgObj.style.bottom) > window.innerHeight-10 || parseInt(imgObj.style.top) <10 || parseInt(imgObj.style.height) <10)
	{
		s*=(-1);t*=(-1);
		animate = setTimeout(motion,8);
	}

	else if(parseInt(imgObj.style.right) > window.innerWidth-10 || parseInt(imgObj.style.left) < 10)
	{
		l*=(-1);s*=(-1);
		animate = setTimeout(motion,8);
	}
	
}

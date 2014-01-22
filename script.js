//globle variable
var animate ;
var onImg= "020.png";
var offImg= "021.png";
function changeimage()
{
	return function()
	{
		if($("#image").attr('src')== offImg)
		{
			$("#image").attr({src:onImg});  
			motion();
		}
		else
		{
			$("#image").attr({src:offImg}); 
			stop();
		}
	}
} 
function stop(){
	clearTimeout(animate);
}
function motion(){
	$('#myImage').css({left: parseInt($('#myImage').css('left')) + l + 'px', top: parseInt($('#myImage').css('top')) + t + 'px', 
		right: parseInt($('#myImage').css('right')) + l + s + 'px', bottom: parseInt($('#myImage').css('bottom')) + s+t + 'px',
		height: parseInt($('#myImage').css('height'))+ s+'px', width: parseInt($('#myImage').css('width'))+ s+'px'});

	if(parseInt($('#myImage').css('right')) <= window.innerWidth-10 && parseInt($('#myImage').css('bottom')) <= window.innerHeight-10 && 
	parseInt($('#myImage').css('top')) >=10  &&  parseInt($('#myImage').css('left')) >= 10 && parseInt($('#myImage').css('height')) >=10)
	{					
		animate = setTimeout(motion,10); // call moveRight in 20msec
   	}
	else if(parseInt($('#myImage').css('bottom')) > window.innerHeight-10 || parseInt($('#myImage').css('top')) <10 || 
	parseInt($('#myImage').css('height')) <10)
	{
		s*=(-1);t*=(-1);
		animate = setTimeout(motion,10);
	}

	else if(parseInt($('#myImage').css('right')) > window.innerWidth-10 || parseInt($('#myImage').css('left')) < 10)
	{
		l*=(-1);s*=(-1);
		animate = setTimeout(motion,10);
	}
	
}

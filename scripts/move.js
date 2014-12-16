function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
}

function startMove(obj,attr,iTarget,fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){doMove(obj,attr,iTarget,fnEnd)},10);
}

function doMove(obj, attr, iTarget, fnEnd)
{
	var iCur = parseFloat(getStyle(obj, attr));
	if (attr == "opacity")
	{
		iCur = parseInt(iCur * 100)
	}
	var iSpeed = (iTarget - iCur) / 5;
	iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
	
	if (iTarget == iCur)
	{
		clearInterval(obj.timer);
		fnEnd && fnEnd();	
	}
	else
	{
		if (attr == "opacity")
		{
			obj.style.filter = "alpha(opacity = " + (iCur + iSpeed) + ")";
			obj.style.opacity = (iCur + iSpeed)	/ 100;
		}
		else
		{
			obj.style[attr] = iCur + iSpeed + "px";	
		}
	}
}
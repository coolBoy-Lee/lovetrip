var marqueeString = new Array();
	marqueeString[0] = '<span>[网站后台公告]</span>欢迎来到网站后台管理界面<br />';
	marqueeString[1] = '<span>[开发组公告]</span>No More<br />';

var marqueeInterval = new Array();
var marqueeId       = 0;
var marqueeDelay    = 5000;
var marqueeSpeed    = 20;
var marqueeHeight   = 25;


function InitMarquee()
{
	var str      = marqueeString[0];
	var newsArea = document.getElementById("shownews");
	newsArea.className = "";
	newsArea.innerHTML = '<div id="marqueeBox" style="overflow:hidden;height:'+marqueeHeight+'px" onmouseover="clearInterval(marqueeInterval[0])" onmouseout="marqueeInterval[0]=setInterval(\'StartMarquee()\',marqueeDelay)"><div>'+str+'</div></div>';
	marqueeId++;
	marqueeInterval[0] = setInterval("StartMarquee()", marqueeDelay);
}

function StartMarquee()
{
	var str = marqueeString[marqueeId];
	marqueeId++;

	if(marqueeId >= marqueeString.length)
	{
		marqueeId = 0;
	}

	if(marqueeBox.childNodes.length == 1)
	{
		var NextLine = document.createElement('div');
		NextLine.innerHTML = str;
		marqueeBox.appendChild(NextLine);
	}

	else
	{
		marqueeBox.childNodes[0].innerHTML = str;
		marqueeBox.appendChild(marqueeBox.childNodes[0]);
		marqueeBox.scrollTop = 0;
	}

	clearInterval(marqueeInterval[1]);
	marqueeInterval[1] = setInterval("scrollMarquee()", marqueeSpeed);
}

function scrollMarquee()
{
	marqueeBox.scrollTop++;
	if(marqueeBox.scrollTop % marqueeHeight == (marqueeHeight-1))
	{
		clearInterval(marqueeInterval[1]);
	}
}

InitMarquee();

function gooeyMenu(){
	var oNav= document.getElementById('nav'),
		items = oNav.getElementsByTagName('a'),
	 	oFrame = document.getElementById('frame'),
	 	x = 0;

	for(var i = 0;i<items.length;i++){
		items[i].index = i;
		items[i].onmouseover = function(event){
			var event = event || window.event;
			x =items[this.index].offsetLeft;
			startMove(oFrame,'left',x);
			
			oNav.onmouseleave = function(){
			startMove(oFrame,'left',0);			
			};
		};			
	}
}
addLoadEvent(gooeyMenu);
	



function searchBox(){
	var oHeader = document.getElementById("header"),
		oNav = oHeader.getElementsByTagName("ul")[0],
		oBox = oHeader.getElementsByTagName("input")[0];

	oBox.onfocus = function(){
		oNav.style.left = "300px";
		this.className = "big";
	};

	oBox.onblur = function(){
		oNav.style.left = "400px";
		this.className = "";
	}
}
addLoadEvent(searchBox);
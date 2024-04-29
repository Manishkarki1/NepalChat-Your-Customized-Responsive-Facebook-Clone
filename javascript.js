var settingsmenu = document.querySelector(".settings-menu");
var darkmode=document.getElementById('light-toggle');

function opensettingsmenu(){
	settingsmenu.classList.toggle("settings-menu-height");
}

darkmode.onclick=function(){
	darkmode.classList.toggle("dark-mode");
	document.body.classList.toggle("dark-theme");
	

	if(localStorage.getItem("theme")=="light"){
		localStorage.setItem("theme","dark");
	}
	else{
		localStorage.setItem("theme","light");
	}
}



if(localStorage.getItem("theme")=="light"){
	darkmode.classList.remove("dark-mode");
	document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
	darkmode.classList.add("dark-mode");
	document.body.classList.add("dark-theme");
}
else{
	localStorage.setItem("theme","light");
}




// JavaScript Document

function setNavBarPosition() {
	"use strict";	
  	if (window.pageYOffset >= stickyBar) {
		navBar.classList.add("stickyBar");
  	} else {
		navBar.classList.remove("stickyBar");
  	}
}


function switchToResponsiveMode() {
	"use strict";	
    var x = document.getElementById("topNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}

function loader() {
	"use strict";
	document.getElementById("animated-loader").style.display = "unset";
    setTimeout(function(){
	document.getElementById("animated-loader").style.display = "none";
    document.body.style.backgroundColor = "white"; 
    }, 1000);
}


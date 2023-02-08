


var toggleMenu = false;
var x = document.querySelector('#bar');
var style = getComputedStyle(x);
var mobileView = style.display;
document.getElementById('bar').addEventListener('click', openMenu);
function openMenu(){
	if(mobileView == 'block'){
		if (toggleMenu == false){
		document.getElementById('menu').style.display = 'flex';
		toggleMenu = true;
		}
		else{
			document.getElementById('menu').style.display = 'none';
			toggleMenu = false;		
		}
	}
}
document.getElementById('menu').addEventListener('click', openMenu);

/*var toggleMenu = false;
document.getElementById('bar').addEventListener('click', openMenu);
function openMenu(){
	if (toggleMenu == false){
		document.getElementById('menu').style.display = 'flex';
		toggleMenu = true;
	}
	else{
		document.getElementById('menu').style.display = 'none';
		toggleMenu = false;		
	}
}*/
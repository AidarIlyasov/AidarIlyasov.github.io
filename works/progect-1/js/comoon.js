

function clickBtn(){
	var btn = document.getElementsByClassName("menu-m__toggle")[0];
	var block = document.getElementsByClassName("menu-m")[0];
	block.classList.toggle("b-nav");
	btn.classList.toggle("-active");
}

var item = document.getElementsByClassName("services__item")[0];
var parent = document.getElementsByClassName("b-services")[0];

	// console.log((item.childNodes).length);

for(var i = 1; i <= 2; i++){
	var dupNode = item.cloneNode(true);
	parent.appendChild(dupNode);
}

	
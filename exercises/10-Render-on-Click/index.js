let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	//your code here
    var elem2 = document.createElement("DIV");
    //var btn = document.getElementById("#superDuperButton");
	elem2.style.background = "yellow";
	elem2.innerHTML = "Hello World";
	document.querySelector("body").appendChild(elem2);
});

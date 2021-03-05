window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	countries.forEach(value => {
		var elem2 = document.createElement("option");
		elem2.innerHTML = value;
		document.querySelector("#mySelect").appendChild(elem2);
	});
};

let option = document.querySelector("#mySelect");
option.addEventListener("change", function() {
	alert(option.value);
});

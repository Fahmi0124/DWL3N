var text = document.getElementById('judul');
text.innerHTML = "Contoh Penerapan Eskternal JS dan inner HTML";

var text = document.getElementById('sub-judul').style.fontFamily = "Algerian";
var text = document.getElementById('sub-judul').style.color = "#000";
var text = document.getElementById('sub-judul').style.animation = "atasbawah 4s ease";

function darkMode() {
	document.body.style.backgroundColor = "#333";
	document.body.style.color = "#fff";
}

function lightMode() {
	document.body.style.backgroundColor = "#fff";
	document.body.style.color = "#333";
}
function myFunction() {
	document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function bigImg(x) {
	x.style.fontSize = "64px";
	console.log('big on hover');
}

function normalImg(x) {
	x.style.fontSize = "12px";
}

function testTextOnOver(x) {
	var display = document.getElementById('text1');
	display.innerHTML = "New test ";
}
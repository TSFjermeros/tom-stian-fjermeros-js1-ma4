const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
	const inputValue = event.target.value;
	const valueLength = inputValue.length;

	if (valueLength > 1) {
		console.log("The input has a value");
	} else {
		console.log("The input does not have a value");
	}
}

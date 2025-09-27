Let result = document.querySelector('.result');

function appendToResult(Value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function calculateResult() {
	result.value = eval(result.value);
}
 
function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

let result = document.getElementById('result');

function appendToResult(value) {
    if (result.value === 'Erreur') {
        clearResult();
    }
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Erreur';
    }
}

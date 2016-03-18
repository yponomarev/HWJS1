var x = prompt("Введите число ", '');
var n = prompt("Введите степень ", '');

if (Number.isInteger(+n)) {
    if (n < 0) {
        alert('Степень ' + n + 'не поддерживается, введите целое число');
    } else {
        pow(x, n);
    }
} else {
    alert('число ' + n + ' не поддерживается, введите целое число');
}

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }
    console.log(result);
}

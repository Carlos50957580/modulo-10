window.addEventListener("load", function() {
    document.getElementById("cedula").addEventListener("keypress", soloNumeros, false);
});

// Solo permite introducir números
function soloNumeros(e) {
    var key = e.keyCode || e.which;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

function valida() {
    let cedula = document.getElementById('cedula').value;
    if (cedula.length !== 11) {
        document.getElementById('result').innerHTML = '<p>Cédula Incorrecta</p>';
        return;
    }
    let c = cedula.split('');
    let v = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let result = 0;

    for (let i = 0; i < 10; i++) {
        let mult = c[i] * v[i];
        if (mult >= 10) {
            mult = mult.toString().split('').map(Number).reduce((x, y) => x + y);
        }
        result += mult;
    }

    let checkDigit = (Math.ceil(result / 10) * 10) - result;

    // Mostrar el mensaje con un pequeño retraso
    setTimeout(() => {
        if (c[10] == checkDigit) {
            document.getElementById('result').innerHTML = '<p>Cédula Correcta</p>';
        } else {
            document.getElementById('result').innerHTML = '<p>Cédula Incorrecta</p>';
        }
    }, 500); // Retraso de 500 ms
}

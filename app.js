function press(n) {
    document.getElementById("output").value += n;
}

function result() {
    var r = document.getElementById("output");
    r.value = eval(r.value);
}

function clr() {
    document.getElementById("output").value = '';
}

function del() {
    var del = document.getElementById("output").value;
    del = del.slice(0, -1);
    document.getElementById("output").value = del;
}

function modulus() {
    var r = document.getElementById("output");
    var currentValue = r.value;
    var parts = currentValue.split('%');
    
    if (parts.length === 2) {
        var dividend = parseFloat(parts[0]);
        var divisor = parseFloat(parts[1]);
        
        if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
            r.value = dividend % divisor;
        } else {
            r.value = 'Error';
        }
    } else {
        r.value = 'Error';
    }
}
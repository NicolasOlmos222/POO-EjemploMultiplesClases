class Persona {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    getNombre() {
        return this.nombre;
    }
    getSaldo() {
        return this.saldo;
    }
    ingresarSaldo(monto) {
        this.saldo += monto;
    }
    retirarSaldo(monto) {
        if (this.saldo < monto) {
            alert("Saldo insuficiente");
        }else{
            this.saldo -= monto;
        }
    }
}

lista = [];
i = 0
function crearPersona() {
    nuevaPersona = new Persona(prompt("Ingresa el nombre"), parseInt(prompt("Ingresa el saldo")));
    lista.push(nuevaPersona);
    mostrarPersona();
}

function mostrarPersona() {
    if (lista.length > 0) {
        document.getElementById("nombre").innerHTML = lista[i].getNombre();
        document.getElementById("saldo").innerHTML = lista[i].getSaldo();
    }else{
        alert("No hay personas");
    }
}

function siguientePersona() {
    if (lista.length > 0) {
        if (i < lista.length - 1) {
            i++;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
    
}

function anteriorPersona() {
    if (lista.length > 0) {
        if (i > 0) {
            i--;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}
   
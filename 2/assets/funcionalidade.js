const visor = document.getElementById('resultado');

function inserir(valor) {
    if (visor.innerText === '0') {
        visor.innerText = valor;
    } else {
        visor.innerText += valor;
    }
}

function limpar() {
    visor.innerText = '0';
}

function calcular() {
    try {
        visor.innerText = eval(visor.innerText);
    } catch {
        visor.innerText = "Erro";
        setTimeout(limpar, 1500);
    }
}

function inverter() {
    visor.innerText = parseFloat(visor.innerText) * -1;
}

function porcentagem() {
    visor.innerText = parseFloat(visor.innerText) / 100;
}
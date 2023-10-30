// Função para calcular os valores com base na operação selecionada
function calcularValores() {
    const valor1 = parseFloat(document.getElementById('txtValor1').value);
    const valor2 = parseFloat(document.getElementById('txtValor2').value);
    const operacao = document.getElementById('cbxOperacao').value;
    let resultado = 0;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            break;
    }

    document.getElementById('txtResultado').textContent = resultado;
}

function calcular(){
    let textresul = document.getElementById('imc-faixa')
    let textaltura = document.getElementById('txtheight')
    let textpeso = document.getElementById('txtweight')
    let valor_altura = Number(textaltura.value)
    let valor_peso = Number(textpeso.value)

    let imc = Math.round(valor_peso / (valor_altura ** 2))
    
    textresul.innerHTML = `Your rounded <strong>BMI</strong> equals ${imc}`

}

let peso = Number(prompt("Qual o peso do seu carro?"))
let potência = Number(prompt("Quantos cavalos de potência tem seu carro?"))

function pesoPotencia(peso, potência) {
    let relacao = parseInt(peso / potência)
    return relacao
}

relacao = pesoPotencia(peso, potência)
console.log("A relação peso/potência do seu carro é em torno de: " + relacao + "kg/cv")
alert("A relação peso/potência do seu carro é em torno de: " + relacao + "kg/cv")

let torque = Number(prompt("Quantos Kgfm de torque tem o seu carro?"))

function pesoTorque(peso, torque) {
    let relacaoTorque = parseInt(peso / torque)
    return relacaoTorque
}

relacaoTorque = pesoTorque(peso, torque)
console.log("A relação peso/torque do seu carro é em torno de: " + relacaoTorque + "Kgfm")
alert("A relação peso/torque do seu carro é em torno de: " + relacaoTorque + "kg/cv")

seguro = "Seu carro é seguro para fazer ultrapassagens"
naoSeguro = "Redobre a atenção ao fazer ultrapassagens"

function veredito(relacao) {
    if(relacao <= 10){
        return seguro
    }

    else if(relacao >= 10){
        return naoSeguro
    }
}

resultado = veredito(relacao)
console.log(resultado)
alert(resultado)
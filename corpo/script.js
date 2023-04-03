function calcular(){
    var peso = document.querySelector('#weight').value
    var altura = document.querySelector('#height').value
    var resultado = document.querySelector('.restView')

    if(peso != 0){
    }else{
        alert("campo 'peso' não preechido")
    }
    if(altura != 0){ 
    }else{
        alert("campo 'altura' não preenchido")
    }

    alt  = altura ** 2 
    res = peso / alt

    if(peso, altura != ''){
        resultado.innerText = res.toFixed(0)
        resultado.style.border = "3px solid"
        resultado.style.borderColor = "rgb(33, 209, 33)"
    }
}
var botao = document.querySelector('#img')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

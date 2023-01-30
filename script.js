function insert(num){     
    let botoes = document.querySelectorAll('.botao');     
    let resultado = document.getElementById('res').innerHTML;     
    document.getElementById('res').innerHTML = resultado + num; 
}

function limpar() {
    document.getElementById('res').innerHTML = " "
}

function apagar() {     
    let valores = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = valores.substring(0, valores.length -1);
}

function calcular() {
    let resultado = document.getElementById('res').innerHTML;
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado) 
    }
}
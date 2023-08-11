function multiplicar(){
    var numero1 = document.getElementById('numero1'); //Obtem o elemento pelo id numero1 e armazena na váriavel de mesmo nome.
    var numero2 = document.getElementById('numero2'); //Obtem o elemento pelo id numero2 e armazena na váriavel de mesmo nome.
    var resposta = document.getElementById('resposta_multiplicacao'); //Obtem o elemento do id resposta_multiplicacao e armazena na variável resposta.

    var n1 = Number(numero1.value); //Converte o valor do numero1 para número e armazena na variável n1
    var n2 = Number(numero2.value); //Converto o valor do numero2 para número e armazena na variável n2

    if(n1 == ' ' || n2 == ' '){//Verifica se os campos foram preenchidos e emite uma resposta.
        resposta.innerHTML = 'É obrigatório preenchimento de ambos os campos.'; 
    }else{ //Caso eles foram preenchidos, é realizado uma multiplicação e o resultado é impresso em tela.
        var resultado = n1 * n2;
        resposta.innerHTML = `${n1} x ${n2} = ${resultado}`;
    }
}

function fatorial(){
    var numero3 = document.getElementById('numero3'); //Obtem o elemento pelo id numero3 e armazena na váriavel de mesmo nome.
    var resposta = document.getElementById('resposta_fatorial'); //Obtem o elemento do id resposta_fatorial e armazena na variável resposta.
    var n3 = Number(numero3.value);//Converto o valor do numero3 para número e armazena na variável n3
    var fatorial = 1 //Cria a variavel fatorial com o valor 1
        
    if(n3 == ' '){ //Verifica se os campos foram preenchidos e emite uma resposta.
        resposta.innerHTML = 'O preenchimento desse campo é obrigatório';
    }else{ //Caso eles foram preenchidos, é realizado o calculo do fatorial e o resultado é impresso em tela.
        for(var cont = n3; cont > 1; cont--){
            fatorial = fatorial * cont;
            resposta.innerHTML = `O fatorial de ${n3} = ${fatorial}`;
        }      
    }  
}

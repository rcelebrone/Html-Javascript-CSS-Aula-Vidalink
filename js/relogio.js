//Crio a classe relogio
class Relogio {

    //Escrevo meu construtor que é o responsável por iniciar a instancia da classe relogio
    //Dica: Intanciar uma classe é usar o "new". Assim: new Relogio(...)
    constructor(elementoHora, instanciaDeDate) {

        //Crio uma prorpiedade boxHora que deve receber uma referência para um elemento Html onde vou colocar o meu relógio
        //Ou seja: document.getElementById("hora") -> lembra que no nosso index.html tem uma tag p com id hora? (<p id="hora"></p>)
        this.boxHora = elementoHora;

        //Crio uma propriedade para receber uma instancia de date. Assim: "new Date()"
        this.agora = instanciaDeDate;
    }

    //Crio o método escrever() que será responsável por montar um texto com a 
    //hora atual, no formato hh:mm:ss e colocar esse texto dentro do elementoHora que recebemos 
    //no construtor atráves da propriedade this.boxHora
    escrever() {
        this.boxHora.innerText = 
            this.completaComZero(this.agora.getHours()) + ":" + 
            this.completaComZero(this.agora.getMinutes()) + ":"+ 
            this.completaComZero(this.agora.getSeconds());
    }

    //Crio o método completaComZero que é responsável por receber um número, converter o número em texto, 
    //contar a quanntidade de caracteres do texto e se possuir apenas 1 caracter no texto, acrescenta o 0 (zero) antes do número
    //e retorna o resultado
    completaComZero(numero) {
        //Isso é um if, semelhante a função SE do excel
        //(condição) ? (verdadeiro) : (falso) ===> (SE verdade) ? (faça isso) : (se falso, faço isso)
        return (numero.toString().length === 1) ? 
            ("0" + numero) : 
            numero;
    }
}
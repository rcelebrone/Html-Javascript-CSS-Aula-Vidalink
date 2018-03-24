//Crio a classe calendario extendendo a classe Date, ou seja, 
//crio uma nova classe, que possui todas as funcionalidades da classe Date do javascript
class Calendario extends Date {

    //Escrevo meu construtor que é o responsável por iniciar a instancia da classe calendario
    //Dica: Intanciar uma classe é usar o "new". Assim: new Calendario(...)
    constructor(elementoData) {

        //Executo aqui o super() para executar o constructor() da classe Date que estou herdando nessa classe
        //fazer o extends (ou extender as funcionalidades), é conhecido como "herdar ou herança"
        super();

        //Crio uma prorpiedade boxData que deve receber uma referência para um elemento Html onde vou colocar o meu relógio
        //Ou seja: document.getElementById("data") -> lembra que no nosso index.html tem uma tag p com id data? (<p id="data"></p>)
        this.boxData = elementoData;
    }

    //Crio o método escrever() que será responsável por montar um texto com a 
    //data atual, no formato "dia de mes de ano" e colocar esse texto dentro do elementoData que recebemos 
    //no construtor atráves da propriedade this.boxData
    escrever() {
        this.boxData.innerText = 
            this.getDate() + " de " + 
            this.meses()[this.getMonth()] + " de " + 
            this.getFullYear();
    }

    //Crio o método meses() para retornar um array de strings de todos os meses do ano
    //Fizemos isso pois o getMonth() do "new Date" retorna os números dos meses, 
    //onde 0 representa janeiro e 11 dezembro
    meses(){
        return ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
    }
}
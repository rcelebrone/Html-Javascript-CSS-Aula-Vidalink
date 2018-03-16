//classe - permite criar objetos na memória para usarmos as funcionalidades que programamos dentro deles
class Calendario extends Date {

    //construtor - executa operações assim que criamos uma instância da nossa classe (ex: new Calendario(...))
    constructor(el) {

        //executa o construtor da classe Pai (nesse caso a classe Date que está no "extends")
        super();

        //atributo que recebe valor enviado para esse construtor
        this.container = el;
    }

    //método - responsável por escrever a data no formato [dia] de [mês] de [ano]
    escrever() {
        //this.container é uma propriedade que aponta para o "el" enviado ao construtor
        this.container.innerText = 
        //getDate é herdado da classe Date e é um método que retorna o dia atual
        this.getDate() + 
        " de " + 
        //chamada do método meses() - como o método meses retorna um array, 
        //podemos pegar qualquer item do array pelo indice 
        //(ex: ["a","b","c"][0] retorna "a" pois 0 é o primeiro indice do array)
        //E getMonth é herdado de Date e retorna o indice do mês atual. Ou seja, se estamos em Março, retorna 2 (0,1,2)
        this.meses()[this.getMonth()] + 
        " de " + 
        //getFullYear também é um método herdado de Date
        this.getFullYear();
    } 

    //método - responsável por retornar um array com os meses do ano
    meses() {
        return ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    }
}

class Relogio {
    constructor(el, dt) {
        this.container = el;
        this.data = dt;
    }

    escrever() {
        let sec = this.data.getSeconds();
        let min = this.data.getMinutes();
        this.container.innerText = 
            this.data.getHours() + ":" + 
            (min.toString().length === 1 ? "0"+min : min) + ":" + 
            (sec.toString().length === 1 ? "0"+sec : sec);
    } 
}

//load
(function(){
    let calendario = 
    new Calendario(document.getElementById("calendario"));
    calendario.escrever();
    
    setInterval(function(){
        let relogio = new Relogio(document.getElementById("relogio"), new Date());
        relogio.escrever();
    }, 1000);
})();
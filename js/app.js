class Calendario extends Date {
    constructor(d) {
        super();

        this.data=d;
    }

    escrever() {
        this.data.innerText = this.getDate() + " de " + this.meses()[this.getMonth()] + " de " + this.getFullYear();
    }

    meses(){
        return ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
    }
}


class Relogio {
    constructor(h,date) {
    
        this.boxHora=h;
        this.agora=date;
    }

    escrever() {
        this.boxHora.innerText = 
            this.completaComZero(this.agora.getHours()) + ":" + 
            this.completaComZero(this.agora.getMinutes()) + ":"+ 
            this.completaComZero(this.agora.getSeconds());
    }

    completaComZero(numero) {
        if(numero.toString().length === 1){
            return "0" + numero;
        } else {
            return numero;
        }
    }
}


(function(){
    
    let banana = new Calendario(document.getElementById("data"));
    banana.escrever();

    setInterval(function(){
        let azul = new Relogio(document.getElementById("hora"), new Date());
        azul.escrever();
    },1000);
})();
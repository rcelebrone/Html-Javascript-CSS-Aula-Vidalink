class Calendario extends Date {
    constructor(el) {
        super();
        this.container = el;
    }

    escrever() {
        this.container.innerText = this.getDate() + " de " + this.meses()[this.getMonth()] + " de " + this.getFullYear();
    } 

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
        this.container.innerText = this.data.getHours() + ":" + this.data.getMinutes() + ":" + (sec.toString().length === 1 ? "0"+sec : sec);
    } 
}

//load
(function(){
    let calendario = new Calendario(document.getElementById("data"));
    calendario.escrever();
    
    setInterval(function(){
        let relogio = new Relogio(document.getElementById("hora"), new Date());
        relogio.escrever();
    }, 1000);
})();
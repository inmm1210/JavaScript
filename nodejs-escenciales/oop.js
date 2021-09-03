//OOP OBJECT ORIENTED PROGRAMMING

class Animal{
    constructor(categoria)
    {
        this.categoria=categoria;
    }
}


class CuentaBancaria{

    constructor(saldo=0,t=' '){
        this.saldo=saldo;
        this.tipo = t;
    }

     deposito(cantidad) {
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -=cantidad;
    }
}
//tarjeta de credito hereda de la clase cuenta bancaria
class TarjetaDeCredito extends CuentaBancaria{
    constructor(s=0,t="TC",fc="xx/xx/xxxx",pm=0){
        super(s,t);
        this.fechaCorte=fc;
        this.pagoMinimo=pm;
    }
    imprimeFechaDeCorete(){
        console.log(`La fecha de cortes es: ${this.fechaCorte}`);
    }
    imprimerPagoMinimo(){
        console.log(`El pago minimo es: ${this.pagoMinimo}`);
    }
}


    let perro = new Animal('perro');
    let gato = new Animal('gato');

    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new CuentaBancaria(5000,'M');
    cuenta1.deposito(2000);
    cuenta1.deposito(4000);
    cuenta1.retiro(2000);
    console.log(cuenta1);

    let cuenta2 = new CuentaBancaria(1000,'E');
    console.log(cuenta2.saldo);
    console.log(cuenta2.tipo);

    let cuenta3 = new CuentaBancaria();
    console.log(cuenta3);

    let cuenta4 = new TarjetaDeCredito(3000,"TC","23/09/2021",365);
    console.log(cuenta4);
    cuenta4.imprimeFechaDeCorete();
    cuenta4.imprimerPagoMinimo();
    

    


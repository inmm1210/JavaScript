class FiguraGeometrica{
    constructor(base,altura)
    {
        this.base= base;
        this.altura= altura;
    }
}

class Triangulo extends FiguraGeometrica{
    area(base,altura){
        let area = (base* altura)/2;
        console.log(`El area de tu triangulo es ${area}`);
    }
}

class Rectangulo extends FiguraGeometrica{
    area(base,altura){
        let area = base* altura;
        console.log(`El area de tu rectangulo es ${area}`);
    }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        super();
        this.lado = lado
    }
    area(lado){
        let area = lado+lado;
        console.log(`El area de tu cuadrado es ${area}`);
    }

    
}


var triangulo = new Triangulo(20,10);
triangulo.area(triangulo.base,triangulo.altura);

var rect = new Rectangulo(2,5);
rect.area(rect.base,rect.altura);

var cuadro = new Cuadrado(20);
cuadro.area(cuadro.lado);


class Persona{
    constructor(nombre, apPaterno,apMaterno,email)
    {
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno= apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}

let persona = new Persona("Bruno","Diaz","TopSecret","yosoybatman.com");
persona.imprimePersona();

let persona2 = new Persona("Clark","Kent","solop se que es martha","yosoysuperman.com");
persona2.imprimePersona();

let persona3 = new Persona("Diana","no se que","menos","yosoywonderwoman.com");
persona3.imprimePersona();


let personas = [];
personas.push(persona);
personas.push(persona2);
personas.push(persona3);


console.log(JSON.stringify(personas)); //esto convierto los objetos del arreglo en json


var persona4 = '{"nombre": "Thor","apPaterno": "no se","apMaterno": "menos","email": "yosoythor.com"}';

console.log(JSON.parse(persona4)); //verifica si una cadena contiene json valido
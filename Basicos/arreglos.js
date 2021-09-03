let animales = [];
var list = document.getElementById('listaDeElementos');

function myFunction() {
    
    var animal = window.prompt("Dime un animal");
    animales.push(animal);
    console.log(animales);
    var newItem = document.createElement('li');
        newItem.innerText = animal;
       
   
        newItem.innerHTML = `${animal} <button onclick='myFunctiondelate(this)'>Eliminar</button>`;
        list.appendChild(newItem);        
}

function myFunctiondelate(n) {
    
    if(n!=undefined)
    {
        n.parentNode.remove();
    }
               
}
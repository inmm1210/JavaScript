function sumaNumeros(num1, num2)
{
    return num1+num2;
}

function buscarCaracter(cadena, letra)
{
    let encontrado = false;
    for(caracter of cadena)
    {
        
        if(caracter == letra)
        {
            encontrado = true;
            break;
        }
        else {
            encontrado = false
        }
      
          
    }

    return encontrado;
}
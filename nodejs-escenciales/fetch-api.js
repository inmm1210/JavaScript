fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(json=>console.log(json))//aqui el árametro úede ser cualquiera 

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title:"Wash the dishes",
            completed: false
        }),
        headers:{
            "Content-type": "application/json"
            }
    })
        .then(response=>response.json())
        .then(json=>console.log(json))
    
//Esta funcion funciona de la misma manera que la funcion de arriba ambas son asyncronas 
        async function getUser(id) 
        {
          let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          if(response.ok)
          {

          }
          else{
              throw Error(response.error);
          }
          let data = await response.json()
          return data;

        }

//Esto da el objeto
let data = getUser(5);
console.log(`datos ${data}`);

//Esta linea si da los valores del usuario
getUser(10).then((data)=>console.log(data)).catch((error)=>console.log('Error!!!!'));
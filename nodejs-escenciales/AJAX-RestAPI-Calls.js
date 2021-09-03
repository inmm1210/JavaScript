$( document ).ready(function() {
    // el signo de $ significa que es jquery 
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){ //result es como nosotros queremos llamar lo que nos retorna
            console.log(result.title);
            console.log(result);
        },
        failure: function(result){
            console.log('La llamada no se pudo completas');
        }
    });

});

  
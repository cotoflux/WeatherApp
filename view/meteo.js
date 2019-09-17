//https://openweathermap.org/data/2.5/weather?zip=08190,es&

//&appid=b6907d289e10d714a6e88b30761fae22
var url="";
console.log(url);


function postalcode($cp){
    let valor = document.getElementById("cp").value;
    console.log("valor: ", valor);
    url="https://openweathermap.org/data/2.5/weather?zip="+valor+",es&appid=b6907d289e10d714a6e88b30761fae22";
    recibirData();

}

function recibirData(){
        let contenido = document.getElementById("contenido");
    $.ajax({
        //Cambiar a type: POST si necesario
        type: "GET",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: url,
    })
    .done(function(response){
        console.log(response);
        let cnt = "";
        cnt +="<li>Coords: "+response["coord"]["lat"]+" long: "+response["coord"]["lon"]+"</li>";
        cnt +="<li>Temperatura: "+response["main"]["temp_max"]+"</li>";
        cnt +="<li>Temperatura: "+response["main"]["temp_min"]+"</li>";
        contenido.innerHTML += cnt;
   

    });
}
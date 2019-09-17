
var url="";
console.log(url);


function postalcode($cp){
    let valor = document.getElementById("ciudad").value;
    console.log("valor: ", valor);

    url="https://api.openweathermap.org/data/2.5/weather?q="+valor+",es&appid=72661064c8662655acd7f910a6412c4c"
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
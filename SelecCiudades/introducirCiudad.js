var key;
/* var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    key=myObj[0].key;
  }
};
xmlhttp.open("GET", "../key.json", true);
xmlhttp.send();
 */
$.ajax({
    //Cambiar a type: POST si necesario
    type: "GET",
    // Formato de datos que se espera en la respuesta
    dataType: "json",
    // URL a la que se enviará la solicitud Ajax
    url: "../key.json",
})
.done(function(response){
    key=response[0].key;
    console.log(response);
});

var url="";
console.log(url);


function postalcode($cp){
    let valor = document.getElementById("ciudad").value;
    console.log("valor: ", valor);

    url="https://api.openweathermap.org/data/2.5/weather?q="+valor+",es&appid="+key+""
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
        cnt +="<li>Coordenadas: "+response["coord"]["lat"]+" long: "+response["coord"]["lon"]+"</li>";
        cnt +="<li>Temperatura MAXIMA: "+response["main"]["temp_max"]+"</li>";
        cnt +="<li>Temperatura MINIMA: "+response["main"]["temp_min"]+"</li>";
        contenido.innerHTML += cnt;
   

    });
}

//Pendiente de hacer:
/*  .fail(function( jqXHR, textStatus, errorThrown ) {
     if ( console && console.log ) {
         console.log( "La solicitud a fallado: " +  textStatus);
     } */

// https://cybmeta.com/ajax-con-json-y-php-ejemplo-paso-a-paso
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var anio = fecha.getFullYear(); //obteniendo año

function getData() {  
fetch(`https://api.covid19api.com/country/argentina?from=2020-01-01T00:00:00Z&to=${anio}-${mes}-${dia}T00:00:00Z`, requestOptions)
    .then(response => response.json())
    .then(result =>{ console.log(result[result.length-1])

            document.getElementById('date-string').innerHTML = `${anio}-${dia}-${mes}` 
            document.getElementById('cases-string').innerHTML = `${result[result.length-1]['Active']}`  
            document.getElementById('deaths-string').innerHTML = `${result[result.length-1]['Deaths']}`  
            document.getElementById('recovered-cases').innerHTML = `${result[result.length-1]['Recovered']}`  
    })
    .catch(error => console.log('error', error));
}


getData();
   




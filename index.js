// Funcao Consulta de CEP
function ConsultaCep(event) {
  event.preventDefault();

  const cep = document.querySelector("#cep").value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const logradouro = data.logradouro;
      const bairro = data.bairro;
      const uf = data.uf;

      document.querySelector("#logradouro").innerHTML = logradouro
      document.querySelector("#bairro").innerHTML = bairro
      document.querySelector("#uf").innerHTML = uf
    });
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  ConsultaCep(event);
});

//Função de Previsão do tempo
function PrevisaoTempo(){
  const latitude = document.querySelector("#latitude").value;
  const longitude = document.querySelector("#longitude").value;

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
  .then((response) => response.json())
  .then(data => {
    const temperatura = data.hourly.temperature_2m[0];

    document.querySelector("#previsao").innerHTML = `Previsão do tempo de acordo com a região: ${temperatura} °C`
  })

  console.log(`Latitude: ${latitude}`)
  console.log(`Longitude: ${longitude}`)
}

document.querySelector("form").addEventListener("submit", PrevisaoTempo)

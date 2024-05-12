// Funcao Consulta de CEP
const ConsultaCep = async (event) => {
  event.preventDefault();

  const cep = document.querySelector("#cep").value;

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();

  const { logradouro, bairro, uf } = data;

  document.querySelector("#logradouro").innerHTML = logradouro;
  document.querySelector("#bairro").innerHTML = bairro;
  document.querySelector("#uf").innerHTML = uf;
};

//Função de Previsão do tempo
const PrevisaoTempo = async () => {
  const latitude = document.querySelector("#latitude").value;
  const longitude = document.querySelector("#longitude").value;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
  );
  const data = await response.json();

  const temperatura = data.hourly.temperature_2m[0];

  document.querySelector(
    "#previsao"
  ).innerHTML = `Previsão do tempo de acordo com a região: ${temperatura} °C`;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  ConsultaCep(event);
});

document.querySelector("form").addEventListener("submit", PrevisaoTempo);

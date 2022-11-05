/* function generatebtn () {
  var name = document.querySelector("#name").value;
  var cpf = document.querySelector("#cpf").value;
  var resp = document.querySelector("#resp").value;
  var genre = document.querySelector("#genre").value;
  var date = document.querySelector("#date").value;
  var url = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
  var conteudoQr = url + "name:"+ name +"/"+ "cpf:"+ cpf +"/"+ "resp:"+ resp +"/"+ "genre:"+ genre +"/"+ "date:" + date;
  document.querySelector("#qrimage").src = conteudoQr;
}

<button onclick="generatebtn()">Clique aqui para criar um codigo <strong>simples</strong></button>

*/


function apiSend() {

  let nome = document.querySelector("#name").value;
  let cpf = document.querySelector("#cpf").value;
  let resp = document.querySelector("#resp").value;
  let genre = document.querySelector("#genre").value;
  let date = document.querySelector("#date").value;
  let dor = document.querySelector("#dor").value;
  var url = "http://192.168.136.41:8000/env/";
  var dados = url + nome + "$&" + cpf + "&" + resp + "-" + genre + "-" + dor;
  console.log(dados)

  document.getElementById("btn").href = dados;
  return 0
}




let jsonArr = [];


// var url = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
// document.querySelector("#qrimage").src = conteudoQr;

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

const btn = document.querySelector('#btn');


btn.addEventListener('click', apiSend());


/* function generatebtn() {
  let nome = document.querySelector("#name").value;
  let cpf = document.querySelector("#cpf").value;
  let resp = document.querySelector("#resp").value;
  let genre = document.querySelector("#genre").value;
  let date = document.querySelector("#date").value;
  let dor = document.querySelector("#dor").value;

  let json = {
    "Nome": nome,
    "Cpf": cpf,
    "Responsavel": resp,
    "Genero": genre,
    "Data nascimento": date,
    "local dor": dor
  }


  jsonArr.push(json);
  console.log(jsonArr);
  var jsonData = JSON.stringify(jsonArr);
  download(jsonData, 'dados.json', 'JSON');

}
*/



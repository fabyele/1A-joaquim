//clube da luta, 18, ação, suspense
//a hora da estrela, 12, drama, comédia 
//as aventuras do ursinho pooh, livre, infantil, musical
//500 dias com ela, 12, comédia, romance
//cidade de deus, 16, crime, drama

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 16) {
    if(idade >= 10) {
      return "cidade de deus";
    } else {
      return "as aventuras do ursinho pooh";
    }
  } else {
    return "clube da luta";
  }
}
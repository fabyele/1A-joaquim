let campoIdade;
let campoAcao;
let campoSuspense;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("14");
  campoAcao = createCheckbox("Gosta de ação?");
  campoSuspense = createCheckbox("Gosta de suspense?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeSuspense = campoSuspense.checked();
  let Recomendacao = geraRecomendacao(idade, gostaDeAcao, gostaDeSuspense);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(Recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAção, gostaDeSuspense) {
  if (idade >= 12) {
    if (idade >= 18) {
      return "Clube da luta";
    } else {
      if (idade >= 16) {
        if(gostaDeAção || gostaDeSuspense) {
          return "estômago";          
        } else{
         return "bicho de sete cabeças";
        }
      } else {
        if (gostaDeAção) {
          return "estômago";
        } else {
          return "O brilho eterno de uma mente sem lembranças";
        }
      }
    }
  } else {
    if (gostaDeSuspense) {
      return "brilho eterno de uma mente sem lembrança";
    } else {
      return "tropa de elite";
    }
  }
}

//Projeto 04 - Adicionando Textos

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed){
    textSize(20);
    fill(0,300,255);
    text("TDS",mouseX,mouseY);
  }
}
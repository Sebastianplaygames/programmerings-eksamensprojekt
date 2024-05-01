let card;
let value1;
let value2;
let result;

function preload() {
  // img = loadImage('skrivnavn.png');
  card = new Card();
  card.preload();
}

function setup() {
  createCanvas(600, 600);

  // Opsætning af kort
  value1 = floor(random(1, 14));
  value2 = floor(random(1, 5));
  card.setup();
}

function draw() {
  background(42, 100, 25);
  card.show();

  text(" " + result, 50, 50);
}

let card;
let value1;
let value2;

function preload() {
 // img = loadImage('skrivnavn.png');
 card = new Card();
 card.preload();
}

function setup() {
  createCanvas(600, 600);

  value1 = floor(random(1,14));
  value2 = floor(random(1,5));

}

function draw() {
  background(42,100,25);
  card.show();
}

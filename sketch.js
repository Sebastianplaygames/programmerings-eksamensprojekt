let card1;
let card2;
let card3;
let card4;
let card5;
let valueX1;
let valueX2;
let valueX3;
let valueX4;
let valueX5;
let valueY1;
let valueY2;
let valueY3;
let valueY4;
let valueY5;
let result1;
let result2;
let result3;
let result4;
let result5;

function preload() {
  // img = loadImage('skrivnavn.png');
  card1 = new Card1();
  card2 = new Card2();
  card3 = new Card3();
  card4 = new Card4();
  card5 = new Card5();
  card1.preload();
  card2.preload();
  card3.preload();
  card4.preload();
  card5.preload();
}

function setup() {
  createCanvas(600, 600);

  // Opsætning af kort
  valueX1 = floor(random(1, 14));
  valueX2 = floor(random(1, 14));
  valueX3 = floor(random(1, 14));
  valueX4 = floor(random(1, 14));
  valueX5 = floor(random(1, 14));
  valueY1 = floor(random(1, 5));
  valueY2 = floor(random(1, 5));
  valueY3 = floor(random(1, 5));
  valueY4 = floor(random(1, 5));
  valueY5 = floor(random(1, 5));

  card1.setup();
  card2.setup();
  card3.setup();
  card4.setup();
  card5.setup();
}

function draw() {
  background(42, 100, 25);
  card1.show();
  card2.show();
  //card3.show();
  //card4.show();
  //card5.show();

  text(" " + (result1+result2), 50, 50);
}

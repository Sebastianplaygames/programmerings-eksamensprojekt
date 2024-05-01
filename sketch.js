function preload() {
  player = new Player();
  player.preload();
  dealer = new Dealer();
  dealer.preload();
}

function setup() {
  createCanvas(600, 600);
  player.setup();
}

function draw() {
  background(42, 100, 25);

  dealer.show();
  player.show();
}

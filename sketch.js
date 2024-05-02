function preload() {
  player = new Player();
  player.preload();
  dealer = new Dealer();
  dealer.preload();
}

function setup() {
  createCanvas(600, 600);
  let button = createButton('play again');
  button.position(0, 100);
  button.mousePressed(reset);

  player.setup(); 
}

function draw() {
  background(42, 100, 25);

  dealer.show();
  player.show();

}
/*
function reset() {
  player.preload();
   player.setup(); 
   player.show()

  dealer.setup()
  dealer.preload()
}
*/
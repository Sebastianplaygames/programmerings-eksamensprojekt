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
  dealer.setup();
}

function draw() {
  background(42, 100, 25);

  dealer.show();
  player.show();
  text(mouseX,150,50)

}

function reset() {
 
    player.preload();
     player.setup(); 
  
    dealer.setup()
    dealer.preload()
 
  }
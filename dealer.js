let dealer1 = 0;

class Dealer {
  constructor() {
    this.dealerImage;
  }

  preload() {
    this.dealerImage = loadImage("dealer.png");
  }

  show() {
    //Scoreboard opstilles
    fill(92, 46, 6);
    rect(width / 3, 135, width / 3 / 2, 30);
    rect(width / 3, 165, width / 3 / 2, 45);
    rect(width / 3 + width / 3 / 2, 135, width / 3 / 2, 30);
    rect(width / 3 + width / 3 / 2, 165, width / 3 / 2, 45);

    fill(255);
    textSize(15);
    textAlign(CENTER);
    text("DEALER", 200 + 100 / 2, 155);
    text("PLAYER", 300 + 100 / 2, 155);

    //Dealer billede
    this.dealerImage.resize(150, 150);
    imageMode(CENTER);
    image(this.dealerImage, width / 2, 75);

  }
}

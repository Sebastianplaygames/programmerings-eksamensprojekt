let card2;
let valueX2;
let valueY2;
let result2;

class Card2 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    valueX2 = floor(random(1, 14));
    valueY2 = floor(random(1, 5));

    if (valueX2 == 1 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 1));
    } else if (valueX2 == 2 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 2));
    } else if (valueX2 == 3 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 3));
    } else if (valueX2 == 4 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 4));
    } else if (valueX2 == 5 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 5));
    } else if (valueX2 == 6 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 6));
    } else if (valueX2 == 7 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 7));
    } else if (valueX2 == 8 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 8));
    } else if (valueX2 == 9 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 9));
    } else if (valueX2 >= 10 && valueX2 <= 13 && valueY2 >= 1 && valueY2 <= 4) {
      console.log((result2 = 10));
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (valueX2 - 1),
      87.5 * (valueY2 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 50 + (25 + 61.5) * 1, 400);
  }
}
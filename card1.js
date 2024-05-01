let card1;
let valueX1;
let valueY1;
let result1;

class Card1 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    valueX1 = floor(random(1, 14));
    valueY1 = floor(random(1, 5));

    if (valueX1 == 1 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 11));
    } else if (valueX1 == 2 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 2));
    } else if (valueX1 == 3 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 3));
    } else if (valueX1 == 4 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 4));
    } else if (valueX1 == 5 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 5));
    } else if (valueX1 == 6 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 6));
    } else if (valueX1 == 7 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 7));
    } else if (valueX1 == 8 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 8));
    } else if (valueX1 == 9 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 9));
    } else if (valueX1 >= 10 && valueX1 <= 13 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 10));
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (valueX1 - 1),
      87.5 * (valueY1 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 50 + (25 + 61.5) * 0, 400);
  }
}

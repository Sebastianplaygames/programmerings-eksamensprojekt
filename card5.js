let card5;
let valueX5;
let valueY5;
let result5;
class Card5 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    valueX5 = floor(random(1, 14));
    valueY5 = floor(random(1, 5));

    if (valueX5 == 1 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 1));
    } else if (valueX5 == 2 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 2));
    } else if (valueX5 == 3 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 3));
    } else if (valueX5 == 4 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 4));
    } else if (valueX5 == 5 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 5));
    } else if (valueX5 == 6 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 6));
    } else if (valueX5 == 7 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 7));
    } else if (valueX5 == 8 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 8));
    } else if (valueX5 == 9 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 9));
    } else if (valueX5 >= 10 && valueX5 <= 13 && valueY5 >= 1 && valueY5 <= 4) {
      console.log((result5 = 10));
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (valueX5 - 1),
      87.5 * (valueY5 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 50 + (25 + 61.5) * 4, 400);
  }
}
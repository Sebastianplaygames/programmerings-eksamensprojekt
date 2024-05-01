let card3;
let valueX3;
let valueY3;
let result3;

class Card3 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    valueX3 = floor(random(1, 14));
    valueY3 = floor(random(1, 5));

    if (valueX3 == valueX1 && valueY3 == valueY1 || valueX3 == valueX2 && valueY3 == valueY2){
      valueX3 = floor(random(1, 14));
      valueY3 = floor(random(1, 5));
    } 

    if (valueX3 == 1 && valueY3 >= 1 && valueY3 <= 4) {
      if (result1 + result2 <= 10){
        console.log((result3 = 11));
      } else if (result1 + result2 > 10){
        console.log((result3 = 1));
      }
    } else if (valueX3 == 2 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 2));
    } else if (valueX3 == 3 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 3));
    } else if (valueX3 == 4 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 4));
    } else if (valueX3 == 5 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 5));
    } else if (valueX3 == 6 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 6));
    } else if (valueX3 == 7 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 7));
    } else if (valueX3 == 8 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 8));
    } else if (valueX3 == 9 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 9));
    } else if (valueX3 >= 10 && valueX3 <= 13 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 10));
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (valueX3 - 1),
      87.5 * (valueY3 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 50 + (25 + 61.5) * 2, 400);
  }
}
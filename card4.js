let card4;
let valueX4;
let valueY4;
let result4;

class Card4 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    valueX4 = floor(random(1, 14));
    valueY4 = floor(random(1, 5));

    if (valueX4 == valueX1 && valueY4 == valueY1 || valueX4 == valueX2 && valueY4 == valueY2 || valueX4 == valueX3 && valueY4 == valueY3){
      valueX4 = floor(random(1, 14));
      valueY4 = floor(random(1, 5));
    } 

    if (valueX4 == 1 && valueY4 >= 1 && valueY4 <= 4) {
      if (result1 + result2 + result3 <= 10){
        result4 = 11;
      } else if (result1 + result2 + result3 > 10){
        result4 = 1;
      }
    } else if (valueX4 == 2 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 2;
    } else if (valueX4 == 3 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 3;
    } else if (valueX4 == 4 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 4;
    } else if (valueX4 == 5 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 5;
    } else if (valueX4 == 6 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 6;
    } else if (valueX4 == 7 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 7;
    } else if (valueX4 == 8 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 8;
    } else if (valueX4 == 9 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 9;
    } else if (valueX4 >= 10 && valueX4 <= 13 && valueY4 >= 1 && valueY4 <= 4) {
      result4 = 10;
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (valueX4 - 1),
      87.5 * (valueY4 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 400, 400);
  }
}
class Card1 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    if (valueX1 == 1 && valueY1 >= 1 && valueY1 <= 4) {
      console.log((result1 = 1));
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
    image(croppedImg, 50+((25+61.5)*0), 400);
  }
}

/*
Samtlige kort indsættes samlet på ét billede
Måden hvorpå kortene hives ind på spillebrættet er ved hjælp af beregnede placeringer
Kortene tildeles værdier fra 1 til 52, hvor man på denne måde kan få fremkaldt et billede
Kortene modtager først senere den korrekte værdi som betyder noget for spillet
Værdierne bliver herefter givet fra 1 til 11
    Altså kan es være 1 eller 11
    Fra 2 - 10 følger egen værdien
    Billedkortene har værdien 10
*/

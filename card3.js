class Card3 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    if (valueX3 == 1 && valueY3 >= 1 && valueY3 <= 4) {
      console.log((result3 = 1));
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
    image(croppedImg, 50+((25+61.5)*2), 400);
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

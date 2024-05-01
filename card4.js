class Card4 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    if (valueX4 == 1 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 1));
    } else if (valueX4 == 2 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 2));
    } else if (valueX4 == 3 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 3));
    } else if (valueX4 == 4 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 4));
    } else if (valueX4 == 5 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 5));
    } else if (valueX4 == 6 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 6));
    } else if (valueX4 == 7 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 7));
    } else if (valueX4 == 8 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 8));
    } else if (valueX4 == 9 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 9));
    } else if (valueX4 >= 10 && valueX4 <= 13 && valueY4 >= 1 && valueY4 <= 4) {
      console.log((result4 = 10));
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
    image(croppedImg, 50+((25+61.5)*3), 400);
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

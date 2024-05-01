class Card5 {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
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
    image(croppedImg, 50+((25+61.5)*4), 400);
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

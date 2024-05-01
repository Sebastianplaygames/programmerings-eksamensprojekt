class Card {
  constructor() {
    this.cardsImage;
  }

  preload() {
    this.cardsImage = loadImage("cards.png");
  }

  setup() {
    if (value1 == 1 && value2 >= 1 && value2 <= 4) {
      console.log((result = 1));
    } else if (value1 == 2 && value2 >= 1 && value2 <= 4) {
      console.log((result = 2));
    } else if (value1 == 3 && value2 >= 1 && value2 <= 4) {
      console.log((result = 3));
    } else if (value1 == 4 && value2 >= 1 && value2 <= 4) {
      console.log((result = 4));
    } else if (value1 == 5 && value2 >= 1 && value2 <= 4) {
      console.log((result = 5));
    } else if (value1 == 6 && value2 >= 1 && value2 <= 4) {
      console.log((result = 6));
    } else if (value1 == 7 && value2 >= 1 && value2 <= 4) {
      console.log((result = 7));
    } else if (value1 == 8 && value2 >= 1 && value2 <= 4) {
      console.log((result = 8));
    } else if (value1 == 9 && value2 >= 1 && value2 <= 4) {
      console.log((result = 9));
    } else if (value1 >= 10 && value1 <= 13 && value2 >= 1 && value2 <= 4) {
      console.log((result = 10));
    }
  }

  show() {
    this.cardsImage.resize(800, 350);
    let croppedImg = this.cardsImage.get(
      61.5 * (value1 - 1),
      87.5 * (value2 - 1),
      61.5,
      87.5
    );
    image(croppedImg, 110, 200);
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

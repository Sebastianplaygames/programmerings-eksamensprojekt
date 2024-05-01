class Card{
    constructor() {
        this.cardsImage;
    }

    preload(){
        this.cardsImage = loadImage('cards.png');
    }

    show() {
        this.cardsImage.resize(800, 350);
        let croppedImg = this.cardsImage.get(61.5 * (value1 - 1), 87.5 * (value2 - 1), 61.5, 87.5);
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
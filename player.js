class Player {
  constructor() {

  }

  preload() {
    card1 = new Card1();
    card2 = new Card2();
    card3 = new Card3();
    card4 = new Card4();
    card5 = new Card5();
    card1.preload();
    card2.preload();
    card3.preload();
    card4.preload();
    card5.preload();
  }

  setup() {
    card1.setup();
    card2.setup();
    card3.setup();
    card4.setup();
    card5.setup();
  }

  show() {
    card1.show();
    card2.show();
    //card3.show();
    //card4.show();
    //card5.show();

    //Scoreboard til Player opstilles
    fill(255);
    textSize(25);
    textAlign(CENTER);
    //score1 = text(" " + (result1), 300+100/2-5,155+40);
    score2 = text(" " + (result1 + result2), 300+100/2-5,155+40);
    //score3 = text(" " + (result1+result2+result3), 300+100/2-5,155+40);
    //score4 = text(" " + (result1+result2+result3+result4), 300+100/2-5,155+40);
    //score5 = text(" " + (result1+result2+result3+result4+result5), 300+100/2-5,155+40);
  }
}

//Vis kort ud fra variablerne givet ved sketch
//Lav en knap til dette
//Knap skal være sammenhængende med scoreboard

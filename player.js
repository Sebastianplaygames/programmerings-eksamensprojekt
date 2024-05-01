let mouseClickedInside = false;
let clickCount = 0;
let run = 0;
class Player {
  constructor() {}

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
    //Hit knap
    fill(92, 46, 6);
    rect(width / 3 - 100 / 2, height - 100, 100, 40);
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("HIT", width / 3, height - 72.5);

    //Stand knap
    fill(92, 46, 6);
    rect((width / 3) * 2 - 100 / 2, height - 100, 100, 40);
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("STAND", (width / 3) * 2, height - 72.5);

    card1.show();
    card2.show();
    score2 = text(" " + (result1 + result2), 300 + 100 / 2 - 5, 155 + 40);

    

  }
}

function mousePressed() {
  if (result1 + result2 == 21) {
    run++;
    fill(255);
    rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

    fill(0);
    textSize(35);
    textAlign(CENTER);
    text("YOU WIN!", width / 2, height / 2);
  }

  if (run == 0) {
    if (
      mouseX > width / 3 - 100 / 2 &&
      mouseX < width / 3 - 100 / 2 + 100 &&
      mouseY > height - 100 &&
      mouseY < height - 100 + 40
    ) {
      if (!mouseClickedInside) {
        fill(92, 46, 6);
        rect(width / 3 + width / 3 / 2, 165, width / 3 / 2, 45);
        fill(255);
        score3 = text(
          " " + (result1 + result2 + result3),
          300 + 100 / 2 - 5,
          155 + 40
        );
        card3.show();
        mouseClickedInside = true;
        clickCount = 1;

        if (result1 + result2 + result3 == 21) {
          run++;
          fill(255);
          rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

          fill(0);
          textSize(35);
          textAlign(CENTER);
          text("YOU WIN!", width / 2, height / 2);
        }
        if (result1 + result2 + result3 >= 22) {
          run++;
          fill(255);
          rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

          fill(0);
          textSize(35);
          textAlign(CENTER);
          text("YOU LOSE!", width / 2, height / 2);
        }
      } else {
        clickCount++;
        fill(92, 46, 6);
        rect(width / 3 + width / 3 / 2, 165, width / 3 / 2, 45);
        fill(255);
        score4 = text(
          " " + (result1 + result2 + result3 + result4),
          300 + 100 / 2 - 5,
          155 + 40
        );
        card4.show();
        if (result1 + result2 + result3 + result4 == 21) {
          run++;
          fill(255);
          rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

          fill(0);
          textSize(35);
          textAlign(CENTER);
          text("YOU WIN!", width / 2, height / 2);
        }
        if (result1 + result2 + result3 + result4 >= 22) {
          run++;
          fill(255);
          rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

          fill(0);
          textSize(35);
          textAlign(CENTER);
          text("YOU LOSE!", width / 2, height / 2);
        }

        if (clickCount == 3) {
          fill(92, 46, 6);
          rect(width / 3 + width / 3 / 2, 165, width / 3 / 2, 45);
          fill(255);
          score5 = text(
            " " + (result1 + result2 + result3 + result4 + result5),
            300 + 100 / 2 - 5,
            155 + 40
          );
          card5.show();
          run++;
          if (result1 + result2 + result3 + result4 + result5 == 21) {
            run++;
            fill(255);
            rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

            fill(0);
            textSize(35);
            textAlign(CENTER);
            text("YOU WIN!", width / 2, height / 2);
          }
          if (result1 + result2 + result3 + result4 + result5 >= 22) {
            run++;
            fill(255);
            rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

            fill(0);
            textSize(35);
            textAlign(CENTER);
            text("YOU LOSE!", width / 2, height / 2);
          }
          if (result1 + result2 + result3 + result4 + result5 <= 20) {
            run++;
            fill(255);
            rect(width / 2 - 250 / 2, height / 2 - 100 / 2, 250, 70);

            fill(0);
            textSize(35);
            textAlign(CENTER);
            text("TRY AGAIN!", width / 2, height / 2);
          }
        }
      }
    }
  }
  if (
    mouseX > (width / 3) * 2 - 100 / 2 &&
    mouseX < (width / 3) * 2 - 100 / 2 + 100 &&
    mouseY > height - 100 &&
    mouseY < height - 100 + 40
  ) {
    run++;

    fill(92, 46, 6);
    rect(width / 3, 165, width / 3 / 2, 45);
    fill(255);
    textSize(25);
    valueD2 = text(" " + (floor(random(17,23))), 300 - 100/2 - 5, 155 + 40);
  }
}

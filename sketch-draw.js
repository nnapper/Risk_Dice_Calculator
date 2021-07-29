function drawInfo() {
  fill(0);
  textSize(20);
  text("Attacking Troops " + global.ATTACKING_TROOPS, 10, 25);
  text("Attacking Dice " + global.ATTACKING_DICE, 10, 50);

  determineDefendingDice();
  text("Defending Troops " + global.DEFENDING_TROOPS, 310, 25);
  text("Defending Dice " + global.DEFENDING_DICE, 310, 50);
}

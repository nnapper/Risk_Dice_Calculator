const global = (function () {
  const attackingTroops = 1;
  const defendingTroops = 1;
  const attackingDice = 1;
  const defendingDice = 1;
  const survivingAttackingTroops = 0;
  const survivingDefendingTroops = 0;

  return {
    ATTACKING_TROOPS: attackingTroops,
    DEFENDING_TROOPS: defendingTroops,
    ATTACKING_DICE: attackingDice,
    DEFENDING_DICE: defendingDice,
    SURVIVING_ATTACKING_TROOPS: survivingAttackingTroops,
    SURVIVING_DEFENDING_TROOPS: survivingDefendingTroops,
  };
})();

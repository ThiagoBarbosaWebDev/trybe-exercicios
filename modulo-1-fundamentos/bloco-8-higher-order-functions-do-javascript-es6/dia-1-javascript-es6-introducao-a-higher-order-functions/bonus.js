const mage = {
  healthPoints: 130 + Math.floor(Math.random() * 100),
  intelligence: 45,
  mana: 15 + Math.floor(Math.random() * 50),
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 300 + Math.floor(Math.random() * 100),
  strength: 50 + Math.floor(Math.random() * 50),
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const handleDragonDamage = () =>
  (dragon.damage = Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15));

const handleWarriorDamage = () =>
  (warrior.damage = Math.floor(
    Math.random() *
      (warrior.weaponDmg * warrior.strength - warrior.strength + 1) +
      warrior.strength
  ));

const handleMageDamage = () => {
  if (mage.mana < 15) {
    return (mage.damage = 0);
  } else {
    return Math.floor(
      Math.random() * (mage.intelligence * 2 - (mage.intelligence + 1)) +
        mage.intelligence
    );
  }
};

const handleMageManaCost = () => {
  if (mage.mana <= 15) {
    return 0;
  } else {
    return 15;
  }
};

const handleMageTurn = () => ({
  dano: handleMageDamage(),
  manaCost: handleMageManaCost(),
});

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (handleWarriorDamage) => {
    warriorHit = handleWarriorDamage();
    warrior.damage = warriorHit;
    dragon.healthPoints -= warriorHit;
    console.log(
      `Warrior hits the Dragon with his broadaxe for ${warriorHit} points of slashing damage`
    );
  },
  mageTurn: (handleMageTurn) => {
    const mageHit = handleMageTurn();
    dragon.healthPoints -= mageHit.dano
    mage.mana -= mageHit.manaCost
    mage.damage = mageHit.dano
    if (mage.mana > 15) {
    console.log(
      `Mage casts a magic missiles for ${mageHit.dano} points of force damage`
    );
  } else {console.log('Mage is out of Mana! He does no damage!')}
  },
  dragonTurn: (handleDragonDamage) => {
    const dragonHit = handleDragonDamage()
    dragon.damage = dragonHit;
    mage.healthPoints -= dragonHit;
    warrior.healthPoints -= dragonHit;
    console.log(
      `The dragon breathes fire! All party members are hit for ${dragonHit} points of fire damage`
    );
  },
  turnReport: () => {
    console.log(battleMembers);
  },
};

const battle = () => {
  while (dragon.healthPoints > 0 && (warrior.healthPoints > 0 || mage.healthPoints> 0)) {
    gameActions.warriorTurn(handleWarriorDamage)
    gameActions.mageTurn(handleMageTurn)
    gameActions.dragonTurn(handleDragonDamage)
    gameActions.turnReport()
  }

  if (mage.healthPoints <= 0 && warrior.healthPoints <= 0 && dragon.healthPoints <= 0) {console.log('The Dragon has been slain, but so were the heroes!')}
  else if (mage.healthPoints <= 0 && warrior.healthPoints > 0) {console.log('The Warrior has killed the dragon, but his friend Mage died')}
  else if (warrior.healthPoints <= 0 && mage.healthPoints > 0) {console.log('The Mage has killed the dragon, but his friend Warrior died')}
  else if (dragon.healthPoints <= 0) {console.log('The Dragon has been Slain!')}
  else {console.log('ROAR, the dragon has vanquished the party!')}
}

battle()

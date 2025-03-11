const playerDisplay = (player) => {
  return `${player.name} - ${player.lifeNumber}\t\t${
    player.cardSlot1 != null ? player.cardSlot1.value : "--"
  } ${player.cardSlot2 != null ? player.cardSlot2.value : "--"} ${
    player.cardSlot3 != null ? player.cardSlot3.value : "--"
  } ${player.cardSlot4 != null ? player.cardSlot4.value : "--"} ${
    player.cardSlot5 != null ? player.cardSlot5.value : "--"
  } = ${player.getCardsResult()}`;
};

const printGame = (player1, player2, drawnCard) => {
  console.log("");
  console.log(playerDisplay(player1));
  console.log("");
  console.log("");
  console.log(`\tDrawn card:[${drawnCard.value}]`);
  console.log("");
  console.log("");
  console.log(playerDisplay(player2));
  console.log("");
};

export default printGame;

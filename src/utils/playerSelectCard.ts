import Player from "../classes/player";
import askQuestion from "./askQuestion";
import printError from "./printError";

const playerSelectCard = async (player: Player) => {
  let playerInput;
  let options = [];

  // Shows and sets menu
  for (let i = 0; i < player.getHand().length; i++) {
    const card = player.getHand()[i];
    console.log(`\t${i + 1} - ${card.getString()}`);
    options.push(i + 1);
  }

  do {
    playerInput = await askQuestion("\nEnter option » ");
    if (options.includes(Number(playerInput))) {
      const selected = player.removeFromHand(Number(playerInput) - 1);
      return selected;
    } else {
      printError("Invalid option!");
    }
  } while (!options.includes(Number(playerInput)));
};

export default playerSelectCard;

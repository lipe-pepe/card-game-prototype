import Player from "../classes/player";
import askQuestion from "./askQuestion";

const playerSelectCard = async (player: Player) => {
  let playerInput;

  console.log(
    `\t1 - [${player.hand[0].symbol}]\n
    \t2 - [${player.hand[1].symbol}]\n
    \t3 - [${player.hand[2].symbol}]\n
    \t4 - [${player.hand[3].symbol}]`
  );

  const options = [1, 2, 3, 4];

  do {
    playerInput = await askQuestion("\nEnter option » ");
    if (options.includes(Number(playerInput))) {
      const selected = player.removeFromHand(Number(playerInput) - 1);
      return selected;
    } else {
      console.log("■ Invalid option!");
    }
  } while (!options.includes(Number(playerInput)));
};

export default playerSelectCard;

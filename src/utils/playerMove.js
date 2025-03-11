import askQuestion from "./askQuestion.js";

const playerMove = async (player, card) => {
  console.log(`------------------------------------------------`);
  console.log(`\t${player.name}'s turn`);
  console.log(`------------------------------------------------`);
  let userInput = 0;
  let move = 0;

  console.log(
    `-> ${player.name}, you drawed a [${card.value}]. Choose your move.\n`
  );

  console.log("1 - Place it in slot 1");
  console.log("2 - Place it in slot 2");
  console.log("3 - Place it in slot 3");
  console.log("4 - Place it in slot 4");
  console.log("5 - Place it in slot 5");

  const options = [1, 2, 3, 4, 5];

  while (!options.includes(move)) {
    userInput = await askQuestion("\n-> Enter your move: ");
    move = parseInt(userInput);

    switch (move) {
      case 1:
        player.setCardSlot(1, card);
        break;

      case 2:
        player.setCardSlot(2, card);
        break;

      case 3:
        player.setCardSlot(3, card);
        break;

      case 4:
        player.setCardSlot(4, card);
        break;

      case 5:
        player.setCardSlot(5, card);
        break;

      default:
        console.log("Invalid option!");
    }
  }
};

export default playerMove;

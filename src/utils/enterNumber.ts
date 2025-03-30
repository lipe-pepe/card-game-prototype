import printError from "../ui/printError";
import askQuestion from "./askQuestion";

const enterNumber = async (options: number[]): Promise<number> => {
  let input;
  do {
    input = await askQuestion("\nEnter number » ");
    if (!options.includes(Number(input))) printError("Invalid option!");
  } while (!options.includes(Number(input)));

  return Number(input);
};

export default enterNumber;

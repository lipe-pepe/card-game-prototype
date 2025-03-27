import { NormalCardColor, NormalCardSymbol } from "../types/cards/normalCard";
import Card from "./card";

class NormalCard extends Card {
  constructor(symbol: NormalCardSymbol, color: NormalCardColor) {
    super(symbol, color);
  }
}

export default NormalCard;

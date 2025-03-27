import {
  SpecialCardColor,
  SpecialCardSymbol,
} from "../types/cards/specialCard";
import Card from "./card";

class SpecialCard extends Card {
  constructor(symbol: SpecialCardSymbol, color: SpecialCardColor) {
    super(symbol, color);
  }
}

export default SpecialCard;

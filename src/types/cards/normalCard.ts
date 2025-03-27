// The values defined to each color are referent to each color's ANSI escape code.
// They will be used to color the Cards in the terminal.

enum NormalCardColor {
  Red = "31",
  Green = "32",
  Yellow = "33",
  Blue = "34",
}

enum NormalCardSymbol {
  Zero = "0",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Plus = "+",
  Minus = "-",
  Multiply = "*",
  Divide = "/",
}

export { NormalCardColor, NormalCardSymbol };

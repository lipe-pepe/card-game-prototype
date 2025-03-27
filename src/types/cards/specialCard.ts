// The values defined to each color are referent to each color's ANSI escape code.
// They will be used to color the Cards in the terminal.

enum SpecialCardColor {
  Magenta = "35",
}

enum SpecialCardSymbol {
  // Steal = "S",
  // Change = "C",
  Destroy = "D",
}

export { SpecialCardColor, SpecialCardSymbol };

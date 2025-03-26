import calculateExpression from "./utils/calculateExpression";

const expr = [
  "12-13",
  "+*349",
  "*9349",
  "+4-57",
  "-34*5",
  "0/4*1",
  "5+3*2",
  "5+3*0",
  "53+/0",
  "/37*2",
  "53+/0",
  "14/60",
  "14/02",
  "14//2",
  "1/0+2",
];

expr.forEach((e) => {
  console.log(e, "=", calculateExpression(e));
});

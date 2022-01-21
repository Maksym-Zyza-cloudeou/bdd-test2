import { Identificators } from "../contexts/Identificators";
const { featureContext } = require("@telus-bdd/telus-bdd");

export const mathSteps = async ({ given, and, when, then }) => {
  let mathContext = () =>
    featureContext().getContextById(Identificators.MathContext);

  given(/^first number is: (.*)$/, (number: string) => {
    console.log("setting first number");
    mathContext().setFirstNum(Number(number));
  });

  and(/^second number is: (.*)$/, (number: string) => {
    console.log("setting second number");
    mathContext().setSecondNum(Number(number));
  });

  when("multiply numbers", async () => {
    console.log("multiplying numbers");
    const mlt = mathContext().getFirstNum() * mathContext().getSecondNum();
    mathContext().setNumRes(mlt);
  });

  then(/^result is: (.*)$/, (expectedResult) => {
    console.log("resulting");
    // expect(mathContext().getNumRes()).toBe(Number(expectedResult));
  });
};

import { Identificators } from "../contexts/Identificators";
import { featureContext } from "@cloudeou/telus-bdd";

export const mathSteps = async ({ given, and, when, then }) => {
  let mathContext = () =>
    featureContext().getContextById(Identificators.MathContext);

  given(/^first number is: (.*)$/, (number: string) => {
    mathContext().setFirstNum(Number(number));
    console.log("setting first number>>", number);
  });

  and(/^second number is: (.*)$/, (number: string) => {
    mathContext().setSecondNum(Number(number));
    console.log("setting second number>>", number);
  });

  when("multiply numbers", async () => {
    const mlt = mathContext().getFirstNum() * mathContext().getSecondNum();
    mathContext().setNumRes(mlt);
    console.log("multiplying result>>", mlt);
  });

  then(/^result is: (.*)$/, (expectedResult) => {
    console.log("resulting>>", expectedResult);
    mathContext().getNumRes().toBe(Number(expectedResult));
  });
};

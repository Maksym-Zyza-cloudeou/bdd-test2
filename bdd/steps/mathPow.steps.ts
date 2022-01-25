import { Identificators } from "../contexts/Identificators";
import { featureContext } from "@cloudeou/telus-bdd";

export const mathPowSteps = async ({ given, and, when, then }) => {
  let mathPowContext = () =>
    featureContext().getContextById(Identificators.MathPowContext);

  given(/^number is: (.*)$/, (number: string) => {
    mathPowContext().setNumber(Number(number));
    console.log("number is>>", number);
  });

  and(/^pow is: (.*)$/, (number: string) => {
    mathPowContext().setPow(Number(number));
    console.log("power is>>", number);
  });

  when("number in pow", async () => {
    const result = Math.pow(
      mathPowContext().getNumber(),
      mathPowContext().getPow()
    );
    mathPowContext().setMathPow(result);
    console.log("mathPow result>>", result);
  });

  then(/^result is: (.*)$/, (expectedResult) => {
    console.log("resulting>>", expectedResult);
    mathPowContext().getMathPow().toBe(Number(expectedResult));
  });
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathSteps = void 0;
const Identificators_1 = require("../contexts/Identificators");
const { featureContext } = require("@telus-bdd/telus-bdd");
const mathSteps = ({ given, and, when, then }) => __awaiter(void 0, void 0, void 0, function* () {
    let mathContext = () => featureContext().getContextById(Identificators_1.Identificators.MathContext);
    given(/^first number is: (.*)$/, (number) => {
        console.log("setting first number");
        mathContext().setFirstNum(Number(number));
    });
    and(/^second number is: (.*)$/, (number) => {
        console.log("setting second number");
        mathContext().setSecondNum(Number(number));
    });
    when("multiply numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("multiplying numbers");
        const mlt = mathContext().getFirstNum() * mathContext().getSecondNum();
        mathContext().setNumRes(mlt);
    }));
    then(/^result is: (.*)$/, (expectedResult) => {
        console.log("resulting");
        console.log(expectedResult);
        // expect(mathContext().getNumRes()).toBe(Number(expectedResult));
    });
});
exports.mathSteps = mathSteps;

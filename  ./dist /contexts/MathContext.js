"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Identificators_1 = require("./Identificators");
class PrlContext {
    constructor() {
        this.identificator = Identificators_1.Identificators.MathContext;
        this.firstNum = 0;
        this.secondNum = 0;
        this.numRes = 0;
    }
    setFirstNum(num) {
        this.firstNum = num;
    }
    setSecondNum(num) {
        this.secondNum = num;
    }
    setNumRes(res) {
        this.numRes = res;
    }
    getFirstNum() {
        return this.firstNum;
    }
    getSecondNum() {
        return this.secondNum;
    }
    getNumRes() {
        return this.numRes;
    }
}
exports.default = PrlContext;

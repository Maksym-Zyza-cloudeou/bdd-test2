import { Identificators } from "./Identificators";

export default class MathPowContext {
  public identificator = Identificators.MathPowContext;
  private number = 0;
  private power = 0;
  private mathPow = 0;

  public setNumber(num: number) {
    this.number = num;
  }
  public setPow(num: number) {
    this.power = num;
  }

  public setMathPow(res: number) {
    this.mathPow = res;
  }

  public getNumber() {
    return this.number;
  }
  public getPow() {
    return this.power;
  }

  public getMathPow() {
    return this.mathPow;
  }
}

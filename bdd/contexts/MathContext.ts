import { Identificators } from "./Identificators";
export default class PrlContext {
  public identificator = Identificators.MathContext;
  private firstNum = 0;
  private secondNum = 0;
  private numRes = 0;

  public setFirstNum(num: number) {
    this.firstNum = num;
  }
  public setSecondNum(num: number) {
    this.secondNum = num;
  }

  public setNumRes(res: number) {
    this.numRes = res;
  }

  public getFirstNum() {
    return this.firstNum;
  }
  public getSecondNum() {
    return this.secondNum;
  }

  public getNumRes() {
    return this.numRes;
  }
}

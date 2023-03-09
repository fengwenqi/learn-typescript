type IOperator = 'plus' | 'minus'
interface ICalculator {
    (operator: IOperator, numbers: number[]) : number;
    plus: (numbers: number[]) => number;
    minus: (numbers: number[]) => number;
}
declare const calculator: ICalculator
export default calculator

import { createReducer, on } from "@ngrx/store";

import * as CreateActions from "../actions/caculator.action";

export interface SomeNumber{
    currentNumber: string;
    previousNumber: string;
    operator: string;
    result:string
}


export const initialState: SomeNumber = {
    currentNumber: '0',
    previousNumber: '0',
    operator: '',
    result: ''
}

export const caculatorReducer = createReducer(
    initialState,
    on(CreateActions.enterNumber, (state, { number }) => {
        if (state.operator == '') {
          return {
            ...state,
            currentNumber: state.currentNumber == '0' ? number : state.currentNumber + number,
          };
        } {
            
          return {
            ...state,
            previousNumber: state.currentNumber,
            currentNumber: number ,
          };
          
        }
        
       
      }),

    on(CreateActions.enterOperator, (state, { operator }) => { if (state.operator != '' && state.currentNumber != '0') {
        const result = calculate(state.previousNumber, state.currentNumber, state.operator);
        return {
          ...state,
          operator,
          previousNumber : '0',
          currentNumber:  result.toString(),
         
        };
      } else {
        return {
          ...state,
          operator,
        };
      }
    }),
  

   
);
function calculate(currentNumber: string, previousNumber: string, operator: string): string {
    const numA = parseFloat(currentNumber);
  const numB = parseFloat(previousNumber);
  let result: number;
  switch (operator) {
    case '+':
      result = numA + numB;
      break;
    case '-':
      result = numA - numB;
      break;
    case '*':
      result = numA * numB;
      break;
    case '/':
      result = numB !== 0 ? numA / numB : NaN;
      break;
    default:
      result = NaN;
  }

  return result.toString();
    // Chưa triển khai tính toán, trả về thông báo lỗi
  }


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
    result: '',
}

export const caculatorReducer = createReducer(
    initialState,
    on(CreateActions.enterNumber, (state, { number }) => {
        let currentNumber;
        if (state.currentNumber == '0') {
          currentNumber = number;
          
        
        } else {
          currentNumber = state.currentNumber + number;
        }
        return {
            ...state,
            currentNumber,
      // When a number is entered, update the currentNumber and reset the result
      
        
      };
    }),
  
    on(CreateActions.enterOperator, (state, { operator }) => {
       
       
        let result = 0;
    
       
    
        if (operator == '%') {
          return {
            ...state,
            currentNumber: (parseFloat(state.currentNumber) / 100).toString(),
          };
        }
    
        if (operator == 'AC') {
          return {
            ...state,
            currentNumber: '0',
            previousNumber: '0',
            operator: '',
          };
        }
    
        if (operator == 'DEL') {
          return {
            ...state,
            currentNumber: state.currentNumber.slice(0, state.currentNumber.length - 1),
          };
        }
    
        if (operator == '=') {
            switch (state.operator) {
              case '+':
                result = parseFloat(state.previousNumber) + parseFloat(state.currentNumber);
                break;
              case '-':
                result = parseFloat(state.previousNumber) - parseFloat(state.currentNumber);
                break;
              case '*':
                result = parseFloat(state.previousNumber) * parseFloat(state.currentNumber);
                break;
              case '/':
                result = parseFloat(state.previousNumber) / parseFloat(state.currentNumber);
                break;
              default:
                break;
            }
      
            return {
              ...state,
              currentNumber: result.toString(),
            };
          } else {
            return {
              ...state,
              previousNumber: state.currentNumber,
              currentNumber: '0',
              operator: operator,
            };
          }
          
      }),
      
  );


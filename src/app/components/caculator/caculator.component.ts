import { Component, OnInit } from '@angular/core';

import * as CreateActions from '../../actions/caculator.action'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  currentNumber: string = "";
  operator: string = "";
  previousNumber : string = "";
  result: string  = '';

  constructor(private store: Store<{ caculator: { currentNumber: string, operator: string, previousNumber : string, result: string } }>) {
    this.store.select('caculator').subscribe((state) => {
      this.currentNumber = state.currentNumber;
      this.previousNumber = state.previousNumber;
      this.result = state.result;
      console.log(this.currentNumber, this.previousNumber)
    });
    this.store.select('caculator').subscribe((state) => {
      this.operator = state.operator;
    });
   
  }
  ngOnInit(): void {
  }

  enterNumber(number: string) {
    this.store.dispatch(CreateActions.enterNumber({number : number}));
  }

  enterOperator(operator: string) {
    this.store.dispatch(CreateActions.enterOperator({ operator : operator}));
  }
  
}

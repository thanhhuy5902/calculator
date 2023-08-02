import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

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
  isDark: boolean = true; 

  constructor(private renderer: Renderer2, private el: ElementRef,private store: Store<{ caculator: { currentNumber: string, operator: string, previousNumber : string, result: string } }>) {
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
  toggleDarkMode() {
    const calculator = this.el.nativeElement.querySelector(".calculator");
    const themeToggleBtn = this.el.nativeElement.querySelector(".theme-toggler");

    if (this.isDark) {
      calculator.classList.add("dark");
      themeToggleBtn.classList.add("active");
    } else {
      calculator.classList.remove("dark");
      themeToggleBtn.classList.remove("active");
    }

    this.isDark = !this.isDark;
  }
  
}

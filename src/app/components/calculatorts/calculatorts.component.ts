import { Component, Renderer2, ElementRef } from '@angular/core';
import { SomeNumber } from '../../module/somenumber';
@Component({
  selector: 'app-calculatorts',
  templateUrl: './calculatorts.component.html',
  styleUrls: ['./calculatorts.component.scss']
})
export class CalculatortsComponent {
  constructor(private renderer: Renderer2, private el: ElementRef){}
  isDark: boolean = true; 
  currentNumberArr : string[] = [];
  previousNumberArr : string[] = [];
  somenumber : SomeNumber = {
  currentNumber: 0,
  previousNumber: 0,
  result: 0,
  operator: ''
}

isNext = false;
isOperation = false;
isEqual = false;


isCheckNumber(value: string): boolean {
  const numericStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'];
  return numericStrings.includes(value);
}


enterNumber(value:string){

  if(!this.isNext ){
    if (value!='%')
    {
      this.currentNumberArr.push(value);
      const combinedString = this.currentNumberArr.join('');
      this.somenumber.currentNumber = parseFloat(combinedString);
    }else{
      this.somenumber.result = this.somenumber.result/100;
      this.somenumber.currentNumber = this.somenumber.result;
    }
    
    //console.log(combinedString);
    
    
    console.log(this.somenumber.currentNumber);
  }

  if(value=='+' || value=='-' || value == '*' || value == '/'||value == '%'){
    
    if (this.isOperation && value!='%')
    {
      this.somenumber.currentNumber = this.somenumber.result;
      this.previousNumberArr=[];
    }
    
    if (this.isOperation && value=='%')
    {
      this.somenumber.result = this.somenumber.result/100;
      this.somenumber.currentNumber = this.somenumber.result;
      this.previousNumberArr=[];
    }

    this.isNext=true;
    if (value!='%'){
      this.somenumber.operator=value;
    }
    console.log(this.somenumber.operator);
    this.isOperation=true;
    
    
  }
 
  if (this.isNext && this.isCheckNumber(value) ){
    // this.isNext=true;
    this.previousNumberArr.push(value);
    const combinedString = this.previousNumberArr.join(''); 
    this.somenumber.previousNumber = parseFloat(combinedString);
    console.log(this.somenumber.previousNumber);
  }

  if (value=='+/-')
  {
    this.somenumber.result = this.somenumber.result * -1;
  }
}

delNumber(){
  if (this.isNext){
    this.previousNumberArr.pop();
    if(this.previousNumberArr.length==0){
      this.somenumber.previousNumber=0;
    }else{
      this.somenumber.previousNumber = parseFloat(this.previousNumberArr.join(''));
    }
  }else{
    this.currentNumberArr.pop();
    if(this.currentNumberArr.length==0){
      this.somenumber.currentNumber=0;
    }else{
      this.somenumber.currentNumber = parseFloat(this.currentNumberArr.join(''));
    }
  }
}

getAnswer(){
  if(!this.isEqual){
    switch (this.somenumber.operator)
    { 
      case '+': this.somenumber.result = this.somenumber.currentNumber + this.somenumber.previousNumber;this.isEqual=true;
      break;

      case '-': this.somenumber.result = this.somenumber.currentNumber - this.somenumber.previousNumber;this.isEqual=true;
      
      break;

      case '*': this.somenumber.result = this.somenumber.currentNumber * this.somenumber.previousNumber;this.isEqual=true;
      break;

      case '/': this.somenumber.result = this.somenumber.currentNumber / this.somenumber.previousNumber;this.isEqual=true;
      break; 
    }
  }else {
    switch (this.somenumber.operator)
    { 
      case '+': this.somenumber.currentNumber = this.somenumber.result; this.somenumber.result += this.somenumber.previousNumber;
      break;

      case '-': this.somenumber.currentNumber = this.somenumber.result; this.somenumber.result -= this.somenumber.previousNumber;
      break;

      case '*': this.somenumber.currentNumber = this.somenumber.result; this.somenumber.result *= this.somenumber.previousNumber;
      break;

      case '/': this.somenumber.currentNumber = this.somenumber.result; this.somenumber.result /= this.somenumber.previousNumber;
      break; 
    }
  }
  
}


clear(){
  this.somenumber = {
    currentNumber: 0,
    previousNumber: 0,
    result: 0,
    operator: ''
  }
  this.isNext = false;
  this.isOperation = false;
  this.isEqual = false;
  this.currentNumberArr = [];
  this.previousNumberArr = [];
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

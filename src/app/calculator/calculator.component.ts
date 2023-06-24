import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  result: string = '';
  isDarkTheme = false;

  onClick(value: string) {
    this.result += value;
  }

  onClear() {
    this.result = '';
  }

  onCalculate() {
    this.result = eval(this.result);
  }
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
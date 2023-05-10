import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  flag: boolean = true;
  isSpecial: boolean = false;
  color: string = 'blue';
  count: number = 0;
  inputValue: string = '';
  todosList: string[] = [];

  addToList() {
    this.todosList.push(this.inputValue);
    this.inputValue = '';
  }

  removeTodo(todoIndex: number) {
    this.todosList = this.todosList.filter((item, index) => index != todoIndex);
  }
}

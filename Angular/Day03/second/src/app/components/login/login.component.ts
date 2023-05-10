import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges {
  loginTitle: string = 'Login Component';
  @Input() content: string = '';
  @Input() flag: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (this.flag) {
      this.loginTitle = 'Login Component';
    } else {
      this.loginTitle = 'Register Component';
    }
  }
}

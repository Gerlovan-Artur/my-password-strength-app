import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  sections: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[0-9]/.test(this.password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

    if (passwordLength < 8) {
      this.sections = ['red', 'red', 'red'];
    } else if ((hasLetters && !hasDigits && !hasSymbols) || (!hasLetters && hasDigits && !hasSymbols) || (!hasLetters && !hasDigits && hasSymbols)) {
      this.sections = ['red', 'gray', 'gray'];
    } else if ((hasLetters && hasSymbols && !hasDigits) || (hasLetters && hasDigits && !hasSymbols) || (!hasLetters && hasDigits && hasSymbols)) {
      this.sections = ['yellow', 'yellow', 'gray'];
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.sections = ['green', 'green', 'green'];
    }
  }
}
import { AbstractControl } from '@angular/forms';

export function ValidatePhone(control: AbstractControl) {
  // regular expression for start with "9" and 10 digit.
  const telephoneRegx = new RegExp('^[9s][0-9]{9}$');
  if (!telephoneRegx.test(control.value)) {
    return { invalidTelephone: true }; 
  }
  return null;
}
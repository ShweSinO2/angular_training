import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms'

import { ValidatePhone } from 'src/app/validators/telephone.validator';

import { Booking, InputObj } from 'src/app/interfaces/booking.interface';

interface BookingFormGroup extends FormGroup {
  value: Booking;
  controls: {
    name: AbstractControl;
    address: AbstractControl ;
    email: AbstractControl ;
    phone: AbstractControl ;
    checkInDate: AbstractControl ;
    checkOutDate: AbstractControl ;
    numberOfGuest: AbstractControl ;
    roomType: AbstractControl ;
    wifiCost: AbstractControl ;
    totalCost: AbstractControl ;
    specialRequirements: AbstractControl ;
  };
}

@Component({
  selector: 'app-assignment-day14',
  templateUrl: './assignment-day14.component.html',
  styleUrls: ['./assignment-day14.component.scss']
})
  
export class AssignmentDay14Component implements OnInit {
  roomTypeSelection: InputObj[] = [
    { value: 100, viewValue: 'Single $100' },
    { value: 250, viewValue: 'Double $250' },
    { value: 400, viewValue: 'King $400' },
    { value: 500, viewValue: 'Luxury $500' }
  ];
  wifiSelection: InputObj[] = [
    { value: 5, viewValue: 'Yes' },
    { value: 0, viewValue: 'No' }
  ];
  guestRegForm!: FormGroup;
  NUMBER_OF_NOTE = 5000;
  minDate = new Date();

  constructor(
    private fb: FormBuilder) { 
    this.guestRegForm = this.fb.group({
      name: ['', [Validators.required]],
      address: [''],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required, ValidatePhone]],
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['',[Validators.required]],
      numberOfGuest: [0, Validators.pattern("^[0-9]*$")],
      roomType: [100],
      wifiCost: [0,[Validators.required]],
      totalCost: [0],
      specialRequirements: ['',[Validators.maxLength(this.NUMBER_OF_NOTE)]]
    }) as BookingFormGroup;
  }

  ngOnInit(): void {
    this.calculateTotalCost();
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.guestRegForm.controls[controlName].hasError(errorName);
  }

  saveData(data: Booking) {
    console.log(data);
  }

  calculateTotalCost() {
    const form = this.guestRegForm;
    if (!form.value.roomType) {
      return;
    }
    const totalVal = parseInt(form.value.roomType.toString()) + form.value.wifiCost;
    form.patchValue({
      totalCost: totalVal
    });
  }
}

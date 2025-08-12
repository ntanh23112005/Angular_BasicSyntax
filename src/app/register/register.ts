import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], //khai báo sử dụng Reactive Form
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; //tổng hơp form control thành form group

  constructor(private fb: FormBuilder) {} // FormBuilder giúp f-group, f-control dễ viết hơn

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]], // form control
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatch }
    );
  }

  // customer validators
  passwordMatch(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw === cpw ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Data: ', this.registerForm.value);
    }
  }
}

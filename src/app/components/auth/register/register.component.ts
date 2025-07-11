import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      lname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }


  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);

      // this.authService.user.name = this.form.value.fname + ' ' + this.form.value.lname,
      //   this.authService.user.email = this.form.value.email,
      //   this.authService.user.password = this.form.value.password,
      //   this.authService.user.phone = this.form.value.phone,
      //   this.authService.user.address = this.form.value.address;

      // const email = {
      //   'email': this.form.value.email,
      // }

      // this.authService.pendingRegister(email).subscribe((res: any) => {
      //   console.log(res);
      // })

      this.router.navigate(['/verification'])

      setTimeout(() => {
        window.alert('Registration successful! , Please verfy your account now');
      }, 1000);
    } else {

      window.alert('Please fix the errors in the form before submitting.');
    }
  }

  noSpaceAllowed(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.toString().indexOf(' ') !== -1) {
        return { noSpaceAllowed: true };
      }
      return null;
    };
  }

}

import { Component,OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nombre: FormControl = new FormControl('', Validators.required);
  apellido1: FormControl = new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(11)]);
  apellido2: FormControl = new FormControl('');
  email: FormControl = new FormControl('',[Validators.required, Validators.email]);
  password: FormControl = new FormControl('',[Validators.required, Validators.maxLength(9)]);
 rPassword: FormControl = new FormControl('',[Validators.required, Validators.maxLength(9)]);


  MyNewForm: FormGroup = new FormGroup({nombre: this.nombre,
                                          apellido1:this.apellido1,
                                          apellido2: this.apellido2,
                                          email: this.email,
                                          password: this.password,
                                          rPassword: this.rPassword});
   constructor(){
    
   }
}

// angular import
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent {
  loginForm: FormGroup<{ email: any; password: any; }>;

  constructor(private authService: AuthService,private fb: FormBuilder, private router:Router ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  signUp(){
    const data =this.loginForm.value

    this.authService.register(data.email,data.password)
    .then(res=>{
      this.router.navigate(['/'])
    })
  }
}

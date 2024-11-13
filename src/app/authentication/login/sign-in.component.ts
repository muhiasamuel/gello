import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService,private fb: FormBuilder, private router:Router ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  ngOnInit(){
   
  }

  login(){
    const data = this.loginForm.value
    console.log(data.email, data.password);
    
    this.authService.login(data.email,data.password)
    .then(res=> {
      this.router.navigate(['/'])
      console.log('Logged in',res)
    })

    .catch(err=>console.log('login error',err))
  }

  googleSignIn(){
    this.authService.googleSignIn()
    .then(res=>{
      this.router.navigate(['/'])
      console.log('Google sign-in',res)})
    .catch(err => console.log('login error',err)
    )
  }

  
}

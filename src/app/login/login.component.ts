import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  error:string = '';
  isLoading:boolean = false;
  
  loginForm:FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[Validators.required])
  });
  loginFormSubmit(loginForm:FormGroup){
    this.isLoading = true;
    console.log(loginForm.value);

    this._AuthService.Signin(loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response);
        if (response && response.accessToken && response.username) {
          localStorage.setItem('userToken', response.token);
          console.log("Login successful");
          // Redirect to home page
          this._Router.navigate(['/home']);
        }
        else {
          console.log("Login failed");
          this.error = response.message;
        }
      }
  })
}
  ngOnInit(): void {
  }

}

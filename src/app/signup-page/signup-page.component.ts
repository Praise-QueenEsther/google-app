import { Component, OnInit } from '@angular/core';
import { AuthsService } from '../auths.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent{

    constructor(private theAuthService:AuthsService){}
    signUpWithGoogle(){
      this.theAuthService.googleSign()
    }

}

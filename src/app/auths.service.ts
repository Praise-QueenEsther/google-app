import { Injectable } from '@angular/core';
import{GoogleAuthProvider} from '@angular/fire/auth'
// import { GoogleAuthProvider } from 'firebase/auth';
import{Router} from '@angular/router';
import{AngularFireAuth} from "@angular/fire/compat/auth"
// import{AngularFireAuth}from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthsService {
  userToken:any
  userProfile:any

  constructor(private fireAuth:AngularFireAuth, private router:Router) { }


  async googleSign() {
    try {
      const userCredential=await this.fireAuth.signInWithPopup(new GoogleAuthProvider())
      this.userProfile=userCredential.user
      this.userToken=userCredential.user?.uid
      localStorage.setItem("token",this.userToken)
      this.router.navigate([""])
    } catch (error) {
      const errorMessage = (error as Error).message;
     console.log(errorMessage)
      
    }
  }


  async logOut() {
  try {
    this.fireAuth.signOut()
    localStorage.removeItem("token")
  } catch (error) {
    console.log(error);
    
  }
  }

  getUserProfile(){
    return this.userProfile
  }
}



import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
   public token: string;

   constructor(public router: Router){}
  //firebase has built in helper methods used below.

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    this.router.navigate(['/signin'])
     .catch(
       error => console.log(error)
     )
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
         .then(
           (token: string) => this.token = token
         )
      }
    )
    .catch(
      error => console.log(error)
    );
  }

 getToken(){
  firebase.auth().currentUser.getToken()
  .then(
    (token: string) => this.token = token
  );
  return this.token;
 }

 isAuthenticated(){
   return this.token != null;
 }

 logout(){
   firebase.auth().signOut();
   this.token = null;
 }

}

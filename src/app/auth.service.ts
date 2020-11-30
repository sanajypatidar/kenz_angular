import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }
  sendToken(token: string,userType:string) {
    localStorage.setItem("LoggedInUser", token)
    localStorage.setItem("currentUser",userType)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  getCurrentUser(){
    return localStorage.getItem("currentUser")

  }
  saveUserdetail(userDetail){
    localStorage.setItem("userdetail",userDetail )


  }
  getUserdetail(){
   return localStorage.getItem("userdetail")
  }
  isLoggedIn() {

    return this.getToken() !== null;
   
  }
  logout() {
    localStorage.removeItem("currentUser");

    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["dashboard"]);
  }
}

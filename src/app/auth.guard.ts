import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    public myRoute: Router,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRole=next.data.expectedRole;

        if(this.auth.isLoggedIn ()){
          let user = this.auth.getCurrentUser();

          console.log("sssssssssssss",expectedRole,"SSSSSSSSSSSSS",user )
    
          if(expectedRole == user){

          return true;
          }else{
            if(expectedRole=="user"){
            this.myRoute.navigate(["admin"]);
          }
          if(expectedRole=="admin"){
            this.myRoute.navigate(["Home"]);

          }
            false;
          }
          
      }else{
        this.myRoute.navigate([""]);
        return false;
      }
  }

  checkUser(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRole=next.data.expectedRole;

          let user = this.auth.getCurrentUser();

    
          if(expectedRole == user){

          return true;
          }else{
            if(user=="user"){
            this.myRoute.navigate(["dashboard"]);
          }
          if(user=="admin"){
            this.myRoute.navigate(["admin"]);

          }
            false;
        }
          
     
  }
  
}


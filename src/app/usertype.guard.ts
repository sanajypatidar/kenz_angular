import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsertypeGuard implements CanActivate {
  constructor(private auth: AuthService,
    public myRoute: Router,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRole=next.data.expectedRole;
      console.log("FFFFFFFFFKKKKKKKKKKKK",state.url,"PPPPPPPPPPPP")
      let user = this.auth.getCurrentUser();
      console.log("UUUUUUUUSER",user)
      if(user=="user"){

         if(state.url!="Home"){

        this.myRoute.navigate(["Home"]);
        

        return true
         }else{

           return false
         }
      }
      if(user=="admin"){
        this.myRoute.navigate(["admin"]);
        return true

      }
      if(user==null){
        if(state.url!="/dashboard"){
          this.myRoute.navigate(["dashboard"]);
          
  
          return true
           }else{
             return true;
           }
      }



    }
  
}


// user type check


// user type check



// if(user=="user"){

//   if(state.url!="/dashboard"){

//  this.myRoute.navigate(["Home"]);
 

//  return true
//   }else{
//    this.myRoute.navigate(["Home"]);

//     return false
//   }
// }
// if(user=="admin"){
//  this.myRoute.navigate(["admin"]);
//  return true

// }
// if(user==null){
//  if(state.url!="/dashboard"){
//    this.myRoute.navigate(["dashboard"]);
   

//    return true
//     }else{
//       return false;
//     }
// }



// }
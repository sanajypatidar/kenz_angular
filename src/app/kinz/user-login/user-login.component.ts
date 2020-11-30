import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth:AuthService, private fb:FormBuilder, private router:Router,private myservice:ApiService) { }
  User:FormGroup;
  user : User=new User ;
  submitted = false;
  res_data:any;
  public massage:string;


  ngOnInit(): void {
    if(this.auth.getCurrentUser()){
      this.router.navigate(["dashboard"])
    }

    this.creatForm()
  }
  creatForm(){
    this.User = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
      ]),
    });

  }
  submit(){
  this.submitted=true
    if (this.User.invalid) {
     return;
  }
   this.myservice.user_login(this.user)
   .subscribe(res=>{
     this.res_data=res;
     if(this.res_data.status==1){
    
     this.user=this.res_data.result[0];
     console.log(this.user)
     this.auth.sendToken("user",this.user.usertype)
     this.auth.saveUserdetail(JSON.stringify(this.user))
       if(this.user.usertype=="user"){
     this.router.navigate(["Home"])
    }else{
      this.router.navigate(["admin"])

    }
     
     }
     if(this.res_data.status==2){
       this.massage=this.res_data.result;
     }
   })
  }


 
  forget_password(){
    this.router.navigate(["forget_password"]);
  }

}

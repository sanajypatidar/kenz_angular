import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  User:FormGroup;
  user : User=new User ;
  submitted = false;
  res_data:any;
  public massage:string;

  constructor(private fb:FormBuilder, private router:Router,private myservice:ApiService) { }

  ngOnInit(): void {
    this.creatForm()

  }
  creatForm(){
    this.User = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      
    });

  }

  submit(){
    this.submitted=true
    if (this.User.invalid) {
     return;
  }

  this.myservice.forget_password(this.user)
  .subscribe(res=>{
    console.log(res)
    this.res_data=res;
    if(this.res_data.status==1){
      this.router.navigate(["/"]);

    }else{
      console.log("sddddddddd")
      this.massage=this.res_data.result;
    }
  })
  }

}

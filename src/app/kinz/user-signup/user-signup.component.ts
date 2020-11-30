import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
 
  constructor(private fb:FormBuilder, private router:Router,private mysercvice:ApiService) { }
  submitted = false;
  User:FormGroup;
  user : User=new User ;
user_data:any;
public massage:string;
  ngOnInit(): void {


    this.creatForm()

  }
  creatForm(){
    this.User = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
      ]),
      companyName: new FormControl(this.user.companyName, [
        Validators.required,
      ]),
      gstinNo: new FormControl(this.user.gstinNo, [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl(this.user.address, [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl(this.user.password, [
        Validators.required,
      ]),
      password_confirmation: new FormControl(this.user.password_confirmation, [
        Validators.required,
      ]),


    },{validators: this.checkPasswords });


  }

  checkPasswords(group: FormGroup) { 
    let pass = group.get('password').value;
    let confirmPass = group.get('password_confirmation').value;
    return pass === confirmPass ? null : { notSame: true }     
  }



  submit(){
    console.log("sucess")
    console.log(this.user)
    this.submitted=true
      if (this.User.invalid) {
       return;
    }
    
    this.mysercvice.signup(this.user)
    .subscribe(res=>{
      this.user_data=res;
      if(this.user_data.status==1){
         this.user=this.user_data.result[0]
     this.router.navigate(["dashboard"])
      }
      if(this.user_data.status==2){
    this.massage=this.user_data.result;
      }
    })
     
   
    }
}

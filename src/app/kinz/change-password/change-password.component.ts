import { Component, OnInit } from '@angular/core';
import { ChangePassword } from 'src/app/model/change-password';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  User:FormGroup;
  user : ChangePassword=new ChangePassword ;
  submitted = false;
  res_data:any;
  public massage:string;
  constructor(private auth:AuthService,private myservice:ApiService,private rotuer:Router) { }

  ngOnInit(): void {

    this.creatForm()

  }
  creatForm(){
    this.User = new FormGroup({
      password: new FormControl(this.user.password, [
        Validators.required
        
      ]),
      new_password: new FormControl(this.user.new_password, [
        Validators.required,
      ]),
      confirm_password:new FormControl(this.user.confirm_password,[
        Validators.required,

      ])
    },{validators: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) { 
  let pass = group.get('new_password').value;
  let confirmPass = group.get('confirm_password').value;
  return pass === confirmPass ? null : { notSame: true }     
}


  submit(){
    this.submitted=true
    
    if (this.User.invalid) {

     return;
  }


    this.user.id=JSON.parse(this.auth.getUserdetail()).id
   this.myservice.chane_password(this.user)
   .subscribe(res=>{
     console.log(res,"CCCCCCCCCCCCCCCCCCCCCCCCC")
     this.res_data=res;
     if(this.res_data.status==1){
      this.rotuer.navigate(["Home"]);
     }else{
      this.massage=this.res_data.massage;
     }

   })

  }

}

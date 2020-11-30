import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user_login:boolean;
user_logout:boolean;
  constructor(private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
    if(this.auth.getCurrentUser()=="user"){
      this.user_login=true;
    }else{
      this.user_login=false;
      if(this.auth.getCurrentUser()=="admin"){
      }

    }

  }
  logout(){
    this.user_login=false;
    console.log("vikash")
    this.auth.logout();
  }
}

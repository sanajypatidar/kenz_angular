import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User=new User ;

  pager: any = {};
  res_data:any
  

  constructor(private myservice:ApiService, private router:Router,private pageservice:PaginationService) { }

  ngOnInit() {
   
    this.setPage(1);


  }
  setPage(page: number) {
  
    this.myservice.user_detail(page).
    subscribe(res=>{
      this.res_data=res;
      if(this.res_data.status==1){
        this.user=this.res_data.result
        console.log(this.user)
      }
      
      this.pager = this.pageservice.getPager(200, page);
      })
}

}

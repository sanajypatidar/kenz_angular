import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/pagination.service';
import {environment} from 'src/environments/environment'

@Injectable()
class Subcategory {
  category:string;
  subcatgory:string;
  id?:number;
  category_id?:string;
  image:string;
}

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  baseUrl=environment.baseUrl
  subcategory_table=new Subcategory()
  pager: any = {};
  res_data:any
  delete_obj={subcategory:"",id:""};
  constructor(private myservice:ApiService,private router:Router, private pageservice:PaginationService) { }

  ngOnInit(): void {
    this.setPage(1);

  }
  setPage(page: number) {
  
    this.myservice.view_subcategory(page).
    subscribe(res=>{
      console.log(res)
      this.res_data=res;
      if(this.res_data.status==1){
        this.subcategory_table=this.res_data.result
        console.log(this.subcategory_table)
      }
      
      this.pager = this.pageservice.getPager(200, page);
      })
}


editproduct(id){
  this.router.navigate(['admin/subcategory',id])
}

deleteconfirmation(data){
  this.delete_obj=data

}
delete(id){
  const data={
    id:id
  }

  this.myservice.deleteSubCategory(data)
  .subscribe(res=>{
    this.res_data=res;
      this.router.navigate(["admin/subcategory"])
  })
}



}

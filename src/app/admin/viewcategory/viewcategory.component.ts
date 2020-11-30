import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PaginationService } from 'src/app/pagination.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

 public MimeTypeArray = Array<{ category: string}>()

  public category_table: MimeTypeArray
  baseUrl=environment.baseUrl
  pager: any = {};
  res_data:any;
  delete_obj={category:"",id:""}
  constructor(private myservice:ApiService,private router:Router, private pageservice:PaginationService) { }

  ngOnInit() {
    this.setPage(1);
   
  }

  setPage(page: number) {
  
    this.myservice.view_category(page).
    subscribe(res=>{
      this.res_data=res;
      if(this.res_data.status==1){
        this.category_table=this.res_data.result
        console.log(this.category_table)
      }
      
      this.pager = this.pageservice.getPager(200, page);
      })
}


editproduct(id){
  this.router.navigate(["admin/addcategory",id])


}
deleteconfirmation(data){
this.delete_obj=data
console.log(this.delete_obj,"FFFFFFF")

}
delete(id){
  console.log("fdsffdsfdsfdsfdsfdoeelle")
  const data={
    id:id
  }

  console.log(data,"KKKKKKK")
  this.myservice.deleteCategory(data)
  .subscribe(res=>{
    this.res_data=res;
    this.setPage(1);

      //  this.category_table=this.res_data.result
      // this.router.navigate(["admin/category"])
  })
}






}

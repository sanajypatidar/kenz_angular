import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  basUrl="http://159.65.147.232/";
  signup(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"user_signup" , data ,httpOptions)

  }
  user_login(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"user_login" , data ,httpOptions)

  }

  forget_password(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"user_login/recover_password" , data ,httpOptions)

  }
  chane_password(data){
    console.log(data,"TTTTTTTTTTTT")
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"change_password" , data ,httpOptions)

  }

  user_detail(obj){
    const data={page:obj}
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"user_detail" , data ,httpOptions)
  }

  view_category(obj){
    const data={page:obj}
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"category/find_all" , data ,httpOptions)
  }

  addcategory(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
          
        })
    };
    return this.http.post(this.basUrl+"category" , data ,httpOptions) 
  }

  view_subcategory(page){
   var data={
     page:page
   }
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"subcategory/find_all" , data ,httpOptions) 

  }

  getCategory(id){
    const data={
      id:id
    }
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 


  }

  updateCategory(data){
    console.log(data,"VVVVVVVVVVV")
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    // return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 

    return this.http.post(this.basUrl+"category/update" , data ,httpOptions) 

  }
  deleteCategory(data){

    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    // return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 

    return this.http.post(this.basUrl+"category/delete" , data ,httpOptions) 

  }
  addSubCategory(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"subcategory" , data ,httpOptions) 

  }
  deleteSubCategory(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    // return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 

    return this.http.post(this.basUrl+"subcategory/delete" , data ,httpOptions) 

  }
  getSubCategory(data){
    console.log("KKKKKKKKK",data)
    
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    return this.http.post(this.basUrl+"subcategory/getData" , data ,httpOptions) 
  }
  updateSubCategory(data){
    console.log(data,"VVVVVVVVVVV")
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    // return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 

    return this.http.post(this.basUrl+"subcategory/update" , data ,httpOptions) 

  }


  order(data){
    // let data={
    //   page:page
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"order" , data ,httpOptions) 

  }
  orderDetail(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };
    // return this.http.post(this.basUrl+"category/getData" , data ,httpOptions) 

    return this.http.post(this.basUrl+"order/find_orderDetail" , data ,httpOptions) 

  }
  findorder(data){
   
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"order/find" , data ,httpOptions) 

  }
  findorder_user(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"order/find" , data ,httpOptions) 


  }
  orderstatus(data){

    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"order/update" , data ,httpOptions) 


  }

  dashboard(){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"dashboard_api"  ,httpOptions) 


  }
  invoice(data){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
        })
    };

    return this.http.post(this.basUrl+"order/invoice" ,data ,httpOptions) 

  }

}

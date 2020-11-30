import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable()
class Category {
  id?:number;
  category:string;
  image:File;
}





@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
categoryModel:Category=new Category()
CategoryModel:FormGroup;
submitted = false;
res_data:any;

  @ViewChild('fileInput') fileInput: ElementRef;

constructor(private myservice:ApiService,private router:Router, private route:ActivatedRoute) { }
onFileSelected(event){
  this.categoryModel.image = <File>event.target.files[0];
  this.creatForm();
}
 ngOnInit() {
  this.route.params.subscribe( params =>{
    if(params['id']){
      this.myservice.getCategory(params['id'])
      .subscribe(res=>{
        this.res_data=res
        if(this.res_data.status==1){
          this.categoryModel=this.res_data.result[0];

        }else{
          
        }
      });
    }
   
  })

    this.creatForm();

 }


  creatForm(){
    this.CategoryModel = new FormGroup({
      category: new FormControl(this.categoryModel.category, [
        Validators.required,
      ]),
      
      image: new FormControl(this.categoryModel.image, [
        Validators.required,
      ]),
     

    });


  }

  onSubmit(){
this.submitted=true

    if (this.CategoryModel.invalid) {
      console.log("invalid form")
      return;
      
   }
    const fb = new FormData();
    fb.append('image', this.categoryModel.image)
    fb.append('category',this.categoryModel.category)
   console.log(this.categoryModel)
     this.myservice.addcategory(fb)
     .subscribe(res=>{
      this.router.navigate(['/admin/category']);
       
     })
  }

  Update(){
    let fb:FormData = new FormData();  

    if(typeof this.categoryModel.image==="string"){
      this.CategoryModel.get('image').clearValidators();
      this.CategoryModel.get('image').updateValueAndValidity();
      delete this.categoryModel.image
   
    }else{
      fb.append("image",this.categoryModel.image)

    }
    if (this.CategoryModel.invalid) {
      this.submitted=true
      return;
      
   }
   fb.append("id",""+this.categoryModel.id+"")
   fb.append("category",this.categoryModel.category)
   
    this.myservice.updateCategory(fb)
    .subscribe(res=>{
      this.res_data=res;
      this.router.navigate(['admin/category'])
    }) 

  }


  

}

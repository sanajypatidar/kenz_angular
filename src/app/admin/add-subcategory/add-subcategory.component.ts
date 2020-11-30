import { Component, OnInit, Injectable, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()
class subCategory {
  id?:number;
  category_id:string;
  subcategory:string;
  image:File;
}
@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  subCategoryModel:subCategory=new subCategory()
  SubCategoryModel:FormGroup;
  submitted = false;
  res_data:any;
  category_data:any;
  @ViewChild('fileInput') fileInput: ElementRef;

  
  constructor(private myservice:ApiService,private router:Router, private route:ActivatedRoute) { }
  onFileSelected(event){
    this.subCategoryModel.image = <File>event.target.files[0];
    this.creatForm();
  }
  ngOnInit(): void {
     

  this.myservice.view_category("not")
  .subscribe(res=>{
    this.res_data=res;
    console.log("SSSSSSSSSSS",res)

    if(this.res_data.status==1){
      this.category_data=this.res_data.result
      
    }
  });


  this.route.params.subscribe( params =>{
    if(params['id']){
      this.myservice.getSubCategory({id:params['id']})
      .subscribe(res=>{
        this.res_data=res
        if(this.res_data.status==1){
          this.subCategoryModel=this.res_data.result[0];
                console.log("TTTTTTTTTTTTT",res,"PPPPPPPPPPPPP")
        }else{
          
        }
      });
    }
   
  })
    this.creatForm();

  }


  

  creatForm(){
    this.SubCategoryModel = new FormGroup({
      category_id: new FormControl(this.subCategoryModel.category_id, [
        Validators.required,
      ]),
      subcategory:new FormControl(this.subCategoryModel.subcategory,[
        Validators.required,
      ]),
      image: new FormControl(this.subCategoryModel.image, [
        Validators.required,
      ]),
     

    });


  }
  onSubmit(){
    this.submitted=true

    if (this.SubCategoryModel.invalid) {
      console.log("invalid form")
      return;
      
   }
    const fb = new FormData();
    fb.append('image', this.subCategoryModel.image)
    fb.append('category_id',this.subCategoryModel.category_id)
    fb.append('subcategory',this.subCategoryModel.subcategory)
     this.myservice.addSubCategory(fb)
     .subscribe(res=>{
      this.router.navigate(['/admin/subcategory']);
       
     })
  }

  Update(){
    let fb:FormData = new FormData();  

    if(typeof this.subCategoryModel.image==="string"){
      this.SubCategoryModel.get('image').clearValidators();
      this.SubCategoryModel.get('image').updateValueAndValidity();
      delete this.subCategoryModel.image
   
    }else{
      fb.append("image",this.subCategoryModel.image)

    }
    if (this.SubCategoryModel.invalid) {
      this.submitted=true
      return;
      
   }
   fb.append("id",""+this.subCategoryModel.id+"")
   fb.append("category_id",this.subCategoryModel.category_id)
   fb.append("subcategory",this.subCategoryModel.subcategory)
   
    this.myservice.updateSubCategory(fb)
    .subscribe(res=>{

      this.res_data=res
      this.router.navigate(["admin/subcategory"])
    }) 

  }


}

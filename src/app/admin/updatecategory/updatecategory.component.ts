import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
public cateres:any;
public userModel:any={};
  constructor(private route:ActivatedRoute,private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      
      this.myservice.getobjcategory(params['id'])
      .subscribe(res=>{
        this.cateres=res
        console.log(this.cateres)
        this.userModel={id:this.cateres.data[0]._id,category_name:this.cateres.data[0].category_name}
      })
   )
  }
  onSubmit(){
    console.log(this.userModel)
    this.myservice.updatecategory(this.userModel)
    .subscribe(res=>{
  
      this.router.navigate(['/admin/category']);
    })
  }
  
}




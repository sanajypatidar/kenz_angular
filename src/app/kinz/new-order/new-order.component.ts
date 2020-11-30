import { Component, OnInit, ViewChild, ElementRef, createPlatformFactory, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/user';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

declare  var jQuery:  any;

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  baseUrl=environment.baseUrl;
  order : Order=new Order ;
  OrderModel:FormGroup;
  imageUrl: any;
  imageUrl_logo:any
  page_step=1;
  category_name="";
  orderdetail: FormArray;
  summary=false;
  test1=1
  res_data:any;
  category_data:any;
  matchmsg=false
  subcategory_data:any;
  submitted=false;
  size_detail:FormArray;
  size_data=[
    {size:"M"},
    {size:"S"}
  ]

  state_data=[
    {
      state:"Andra Pradesh"
    },
    {
      state:"Arunachal Pradesh"
    },
    {
      state:"Assam"
    },
    {
      state:"Bihar"
    },
    {
      state:"Chhattisgarh"
    },
    {
      state:"Goa"
    },
    {
      state:"Gujarat"
    },
    {
      state:"Haryana"
    },
    {
      state:"Himachal Pradesh"
    },
    {
      state:"Jammu and Kashmir"
    },
    {
      state:"Jharkhand"
    },
    {
      state:"Karnataka"
    },
    {
      state:"Kerala"
    },
    {
      state:"Madya Pradesh"
    },
    {
      state:"Maharashtra"
    },
    {
      state:"Manipur"
    },
    {
      state:"Meghalaya"
    },
    {
      state:"Mizoram"
    },
    {
      state:"Nagaland"
    },
    {
      state:"Orissa"
    },
    {
      state:"Punjab"
    },
    {
      state:"Rajasthan"
    },
    {
      state:"Sikkim"
    },
    {
      state:"Tamil Nadu"
    },
    {
      state:"Telagana"
    },
    {
      state:"Tripura"
    },
    {
      state:"Uttaranchal"
    },
    {
      state:"Uttar Pradesh"
    },
    {
      state:"West Bengal"
    }
  ]



  

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private myservice:ApiService,private router:Router,private fb:FormBuilder, private auth:AuthService)
   { }

   onFileSelected(event){
    this.order.image = <File>event.target.files[0];
    this.order.subcategory="other"

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      
    }
    reader.readAsDataURL(this.order.image);
    this.creatForm();
  }


  onFileSelected1(event){
    this.order.logo = <File>event.target.files[0];
    
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl_logo = event.target.result;
      
    }
    reader.readAsDataURL(this.order.logo);
    this.creatForm();
  }
  ngOnInit(): void {


    (function ($){

    $(document).ready(function(){

      // $("#current-page").click(function(){
      //   $(".side-tab").stop().slideToggle();
      //   $(this).stop().toggleClass("active");
      // });

      // $("#step-2-btn").click(function(){
      //   $(".step-box").hide();
      //   $("#step-2").show();
      // });

      // $("#step-3-btn").click(function(){
      //   $(".step-box").hide();
      //   $("#step-3").show();
      // });

      // $("#step-4-btn").click(function(){
      //   $(".step-box").hide();
      //   $("#step-4").show();
      // });

      // $("#back-step-1-btn").click(function(){
      //   $(".step-box").hide();
      //   $("#step-1").show();
      // });

      // $("#back-step-2-btn").click(function(){
      //   $(".step-box").hide();
      //   $("#step-2").show();
      // });


      $("#k").hover(function(){
        $("#k").attr("src","images/k_hover.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z.jpg");
      });

      $("#e").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e_hover.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z.jpg");
      });
      $("#n").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n_hover.jpg");
        $("#z").attr("src","images/z.jpg");
      });
      $("#z").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z_hover.jpg");
      });
      
      
    });

    $(window).scroll(function() {
       var value = $(this).scrollTop();
      //  if (value > 700){
      //   $("#mainNav .logo").attr("src", "images/header_logo2-black.png");
      //   $("#mainNav .nav-lin").css("color", "#000");
      //   $("#mainNav .navbar").css("background-color", "transparent");
      //   $("#mainNav .navbar").css("opacity", "1");
      //  }else{
      //   $("#mainNav .logo").attr("src", "images/header_logo2-black.png");
      //   $("#mainNav .nav-lin").css("color", "#fff");
      //   $("#mainNav .navbar").css("background-color", "transparent");
      //   $("#mainNav .navbar").css("opacity", "1");
      //  }
        
    });
  })(jQuery);
  
console.log(this.order,"FFFFF")
  // get all category
 this.myservice.view_category(0)
 .subscribe(res=>{
    //  console.log(res,"FFFFFFFFFFFF")
     this.res_data=res;
     if(this.res_data.status==1){
       this.category_data=this.res_data.result
       this.order.category=this.category_data[0].category+","+this.category_data[0].id
       this.creatForm()

      }
 });
 this.creatForm()





}

creatForm(){
  this.OrderModel = this.fb.group({
    category: new FormControl(this.order.category, [
      Validators.required,
    ]),
    subcategory: new FormControl(this.order.subcategory, [
      Validators.required,
      
    ]),
    image:new FormControl(this.order.image,[
      Validators.required
    ]),
    total:new FormControl("",[
      Validators.required,
    ]),
    logo:new FormControl(this.order.logo,[
      Validators.required,
    ]),
    orderdetail:this.fb.array([
      this.patchvalues()
    ])
   },
  //  {validators: this.checkTotal }
   );
 

  


}

checkTotal(group: FormGroup) { 
  class TravellerCollection extends Array {
     
  sum(key) {
    
      return this.reduce((a, b) => a + (b[key] || 0), 0);
  }
}
}

get getOrderModelvalue(){
  return this.OrderModel.value;

}

get OrderDetail(){
 return this.OrderModel.get('orderdetail') as FormArray;
}


add_orderItem(){
    this.OrderDetail.push(this.patchvalues())

}

delete_orderItem(i){
  console.log("delete");
  
  this.OrderDetail.removeAt(i)
}

patchvalues(){
  return this.fb.group({
    state:new FormControl("",[
      Validators.required
    ]),
    city:new FormControl("",[
      Validators.required
    ]),
    address:new FormControl("",[
       Validators.required
    ]),
    // size:new FormControl("",[
    //    Validators.required
    // ]),
    // no_piece:new FormControl("",[
    //  Validators.required
    // ]), 
    size_detail:this.fb.array([
      this.fb.group({
        size:new FormControl("S"),
        no_pice:""
      }),
      this.fb.group({
        size:new FormControl("M"),
        no_pice:""
      }),
      this.fb.group({
        size:new FormControl("L"),
        no_pice:""
      }),
      this.fb.group({
        size:new FormControl("Xl"),
        no_pice:""
      }),
      this.fb.group({
        size:new FormControl("XXl"),
        no_pice:""
      }),this.fb.group({
        size:new FormControl("XXXl"),
        no_pice:""
      })
    ])
              
  })

}

imageselect(image:string){
  console.log("KKKKKKKKKKK",image);
  this.order.subcategory=this.OrderModel.get('subcategory').value;
  this.imageUrl=this.baseUrl+"image/"+image;

  this.order.image=image 
  this.creatForm() 
}


nextStep(){
  if(this.page_step==3){
    this.submitted=true
    if(this.OrderModel.invalid){
      return;
      
    }

    this.OrderModel.value.category=(this.OrderModel.get('category').value.split(","))[0]
    this.page_step=4
    console.log(this.OrderModel.value,"FFFFFFFFFF")

  }
  if(this.page_step==2){
    this.submitted=true
    if(this.OrderModel.invalid){
      if(this.OrderModel.value.logo===null){
        return;

      }
      
    }
    this.submitted=false

    this.OrderModel.value.logo=this.order.logo;

     if(typeof this.OrderModel.get('image').value==="string"){
      this.OrderModel.get('image').clearValidators();
      this.OrderModel.get('image').updateValueAndValidity();
       
    }else{
      this.OrderModel.value.image=this.order.image
    }
    this.order.subcategory=this.OrderModel.get('subcategory').value;
    this.order.image=this.OrderModel.get('image').value;
     this.order.logo=this.OrderModel.get("logo").value;
    this.page_step=3
this.category_name=(this.OrderModel.get('category').value.split(","))[0]
    this.creatForm();
    
  }
  if(this.page_step==1){
    
   
  var category_string=this.OrderModel.get('category').value.split(",");
  const data={
    category_id:category_string[1]
  }

  

this.myservice.getSubCategory(data)
.subscribe(res=>{
  this.page_step=2;
  this.res_data=res;
  console.log(res);
  
  this.subcategory_data=this.res_data.result;

  this.order.category=this.OrderModel.get('category').value;
  this.order.subcategory=this.subcategory_data[0].subcategory;
  this.order.image=this.subcategory_data[0].image
  this.imageUrl=this.baseUrl+"image/"+this.order.image;
  this.creatForm()
    
})
}




}


backStep(){
  console.log(this.OrderModel.value)
  // if(this.page_step==2){
    this.page_step--
    
  
  // }



}


// keyPress(event: KeyboardEvent) {
//   var check =0;
//   console.log(check,"FFFFFFFFFF",this.OrderModel.value.total);


//   this.OrderModel.value.orderdetail.forEach(x=>{
//     x.size_detail.forEach(y=>{
//          check+=parseInt(y.no_pice)
//     })
//   });
//   if(check==this.OrderModel.value.total){
//     console.log(check,"FFFFFFFFFF",this.OrderModel.value);
    
//   }else{
//     console.log(check,"FFFFFFFFFF",this.OrderModel.value.total);

//     console.log("NOT MMMMMMMMMMMSCH");
    
//   }

// }

modelChanged(t){
  if(this.submitted){
  var check =0;
  // console.log(check,"FFFFFFFFFF",this.OrderModel.value.total);


  this.OrderModel.value.orderdetail.forEach(x=>{
    x.size_detail.forEach(y=>{
           if(y.no_pice!= "" ){
           check+=parseInt(y.no_pice)
          }
    })
  });
  if(check==this.OrderModel.value.total){
           this.matchmsg=false;
  }else{
    this.matchmsg=true;

    
  }
}
  
}

submit(){
  this.submitted=true
    
  this.modelChanged(1)

    
         if(this.OrderModel.invalid){
      return;
      
    }

if(this.matchmsg==true){
  return;
}


if(this.test1==1){
  

  this.OrderModel.value.category=(this.OrderModel.get('category').value.split(","))[0]
this.test1=2
}



    
  console.log(this.OrderModel.value,"FFFFFFFFFF")
  var userdata=JSON.parse(this.auth.getUserdetail());
  console.log(userdata)
  let fb:FormData = new FormData();  
     fb.append("category",this.OrderModel.value.category);
     fb.append("subcategory",this.OrderModel.value.subcategory);
     fb.append("total",this.OrderModel.value.total);
     fb.append("orderdetail",JSON.stringify(this.OrderModel.value.orderdetail));
     fb.append("image",this.OrderModel.value.image);
     fb.append("name",userdata.name)
     fb.append("email",userdata.email);
     fb.append("userid",userdata.id);
     fb.append("logo",this.OrderModel.value.logo)
     
  this.myservice.order(fb)
  .subscribe(res=>{
    this.router.navigate(['order_status'])

  })

}

Summary(){
  this.submitted=true;
  this.modelChanged(1)

    if(this.OrderModel.invalid){
      return;
      
    }

    if(this.matchmsg==true){
      return;
    }
if(this.test1==1){


  this.OrderModel.value.category=(this.OrderModel.get('category').value.split(","))[0]
  this.test1=2
}
  if(this.summary==false){

     this.summary=true;
  }
  else{
    this.summary=false;
 }
}



getValidity(i) {
  return (<FormArray>this.OrderModel.get('orderdetail')).controls[i].invalid;
}





}

// 



// nextStep(){
//   if(this.page_step==3){
//     console.log(this.OrderModel.value,"FFFFFFFFFF")
//     this.submitted=true
//     if(this.OrderModel.invalid){
//       return;
      
//     }
//     this.page_step=4
//     console.log(this.order,"PPPPPPPPPPPP")
  
//   }
//   if(this.page_step==2){

//     if(typeof this.OrderModel.get('image').value==="string"){
//       this.OrderModel.get('image').clearValidators();
//       this.OrderModel.get('image').updateValueAndValidity();
//       this.imageUrl="";
       
//     }else{
//     this.order.subcategory=this.OrderModel.get('subcategory').value;
//     this.order.image=this.OrderModel.get('image').value;
//   }
//     this.page_step=3
//     this.creatForm()
//   }
//   if(this.page_step==1){
//     console.log(this.OrderModel.value,"SSSSSSSSSSS");
    
   
//     this.order.category=this.OrderModel.get('category').value;
//   var category_string=this.OrderModel.get('category').value.split(",");
//   const data={
//     category_id:category_string[1]
//   }

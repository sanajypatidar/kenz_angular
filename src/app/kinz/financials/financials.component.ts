import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

declare var jQuery:any;
@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {
  baseUrl=environment.baseUrl;

  res_data:any;
  purchaseData:any;
  order_res_data:any
  order_detail_table=[];
  order_detail_result=[];
  re_orderdata={};
  re_order_size_detail:any;
  order_data={category:"",subcategory:"",image:"",total:"",date:"",orderid:"",status:"",amount:"",id:""}

    constructor(private myservice:ApiService, private router:Router, private rotuer:Router,private auth:AuthService) { }
  
    ngOnInit(): void {
      (function ($){
      $(document).ready(function(){
  
        $("#current-page").click(function(){
          $(".side-tab").stop().slideToggle();
          $(this).stop().toggleClass("active");
        });
  
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
  
      // $(window).scroll(function() {
      //    var value = $(this).scrollTop();
      //    if (value > 700){
      //     $("#mainNav .logo").attr("src", "images/header_logo2-black.png");
      //     $("#mainNav .nav-lin").css("color", "#000");
      //     $("#mainNav .navbar").css("background-color", "transparent");
      //     $("#mainNav .navbar").css("opacity", "1");
      //    }else{
      //     $("#mainNav .logo").attr("src", "images/header_logo2-black.png");
      //     $("#mainNav .nav-lin").css("color", "#fff");
      //     $("#mainNav .navbar").css("background-color", "transparent");
      //     $("#mainNav .navbar").css("opacity", "1");
      //    }
          
      // });
    })(jQuery);
    var userdata=JSON.parse(this.auth.getUserdetail());
     const purchase_data={
      userid:userdata.id
     }
     this.myservice.findorder_user(purchase_data)
     .subscribe(res=>{
       this.res_data=res;
       console.log(this.res_data)
       if(this.res_data.status==1){
        this.purchaseData=this.res_data.result
        console.log(this.purchaseData,"PPPPPPP");
        
       }
     });
    
     
  
  }


  order_detail(data){
  console.log("SSSSSSSSSSS",data);
  

  this.order_data=data;
     this.router.navigate(['Invoice',data.id])
  }

 
  }
  

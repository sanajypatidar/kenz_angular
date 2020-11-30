import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';
import { PaginationService } from 'src/app/pagination.service';
import {environment} from 'src/environments/environment'
import { from } from 'rxjs';
declare var jQuery:any;
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  baseUrl=environment.baseUrl;

  res_data:any;
  ordertable_table:any;
  pager: any = {};
  userdata:any;
  order_res_data:any
  order_detail_table=[];
  order_detail_result=[];
  disable=true;
  order_data={category:"",subcategory:"",image:"",total:"",date:"",orderid:"",status:"",amount:"",id:""}
  constructor(private myservice:ApiService,private auth:AuthService,private pageservice:PaginationService) { }

  ngOnInit(): void {
    (function($){
        
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
    })(jQuery)
  
    this.userdata=JSON.parse(this.auth.getUserdetail());
    console.log("FFFFFFFFFsanjay")
    this.setPage(1);
  
  }

  setPage(page: number) {
     var data={
       userid:this.userdata.id,
       page:page
     }
    this.myservice.findorder(data).
    subscribe(res=>{
      console.log(res)
      this.res_data=res;
      if(this.res_data.status==1){
        this.ordertable_table=this.res_data.result;
        console.log("KKKKKKKKK",this.ordertable_table)
      }
      
      this.pager = this.pageservice.getPager(200, page);
      })
}

order_detail(data){
  this.disable=true
  this.order_detail_result=[]
  if(data.status=="get cotation"){
    this.disable=false
  }
  console.log(data,"SSSSSSSSSSSS");
  
// console.log({id_order:data});

  this.order_data=data;
  this.myservice.orderDetail({id_order:data.id})
  .subscribe(res=>{
    console.log("SSSSSSSSSS",res);
    
    this.order_res_data=res;
    this.order_detail_table=this.order_res_data.result;
    
    this.order_detail_result =this.order_detail_table.map(obj => [{state:obj.state,city:obj.city,address:obj.address,size_detail:JSON.parse(obj.size_detail)}]);
    console.log(this.order_detail_result,"FFFFFFFF");
    
  })


}

approve(id){
  var data={
    id:id,
    status:"confirm"
  }
  this.myservice.orderstatus(data)
  .subscribe(res=>{
  })
}
cancel(id){
  var data={
    id:id,
    status:"cancel"
  }
  this.myservice.orderstatus(data)
  .subscribe(res=>{
  })
}



}

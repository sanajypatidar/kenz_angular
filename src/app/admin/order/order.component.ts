import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/pagination.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  baseUrl=environment.baseUrl;
  ordertable_table:any;
  res_data:any;
  pager: any = {};
  order_res_data:any;
  order_detail_table=[];
  order_detail_result=[];
  cotaion_data={category:"",subcategory:"",total:"",id:"",index:""}
  per_pieces_amount:number;
  tex:number
  amount:number;
  total_amount:number
  constructor(private myservice:ApiService,private router:Router, private pageservice:PaginationService ) { }
     
  ngOnInit() {
    console.log("FFFFFFFFFsanjay")
    this.setPage(1);

  
  }
  setPage(page: number) {
  
    this.myservice.findorder({page:page}).
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


detail(id){

  this.myservice.orderDetail({id_order:id})
  .subscribe(res=>{
    this.order_res_data=res;
    this.order_detail_table=this.order_res_data.result;
    this.order_detail_result =this.order_detail_table.map(obj => [{state:obj.state,city:obj.city,address:obj.address,size_detail:JSON.parse(obj.size_detail)}]);
    console.log(this.order_detail_result,"FFFFFFFF");
    
  })
}

order_status(status,id,index){
  var data={
    id:id,
    status:status
  }
  this.myservice.orderstatus(data)
  .subscribe(res=>{
    this.ordertable_table[index].status=status;
  })

}
cotaion_confirmation(order_data){
   this.cotaion_data=order_data;
}

modelChanged(event,type){
  console.log(this.per_pieces_amount,"SSSSSSSS")
  if(type=="tex"){


  }

  // if(type=="per_piecs_amount"){
    
  
    if(this.tex != null){
        if(this.per_pieces_amount!=null){
      
      if(this.per_pieces_amount<0)
    {this.per_pieces_amount= this.per_pieces_amount * -1}
      this.total_amount= (this.per_pieces_amount)*(parseInt(this.cotaion_data.total))*(100+this.tex)/100
      this.amount= (this.per_pieces_amount)*(parseInt(this.cotaion_data.total))

    }

    }
    else{

      if(this.per_pieces_amount<0)
    {this.per_pieces_amount= this.per_pieces_amount * -1}
      this.total_amount= (this.per_pieces_amount)*(parseInt(this.cotaion_data.total))
       
    }
    
     
    
  // }
 
}

cotation(){
    
  var data={
    id:this.cotaion_data.id,
    status:"get cotation",
    per_pieces_amount:this.per_pieces_amount,
    amount:this.amount,
    tex_amount:this.tex,
    total_amount:this.total_amount
  }

  this.myservice.orderstatus(data)
  .subscribe(res=>{
  })
}
 

}

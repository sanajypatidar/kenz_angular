import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  res_data:any
  table_data:{category:"",name:"",total:"",per_pieces_amount:"",amount:number,email:"",tex_amount:number,total_amount:number};
  constructor(private route:ActivatedRoute ,private myservice:ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      if(params['id']){
        this.myservice.invoice({id:params['id']})
        .subscribe(res=>{
          this.res_data=res
          if(this.res_data.status==1){
            this.table_data=this.res_data.result[0];
            console.log(this.table_data);
          }else{
            
            
          }
        });
      }
     
    })

  }
  printF(){
    window.print();

  }

}

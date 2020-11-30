import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
res_data:any;
total_data={totaluser:"",totalorder:"",get_cotation:"",approved:""}
  constructor(private myservice:ApiService) { }

  ngOnInit() {
    this.myservice.dashboard()
    .subscribe(res=>{
this.res_data=res;
this.total_data=this.res_data
console.log(this.res_data,"SSSSSSSSSSSSS");

    });
  }

}

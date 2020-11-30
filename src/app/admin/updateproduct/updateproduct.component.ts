import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
public productmodel:any={};
public productres:any;
public categorys:any;
public units :any;
public stocks:any;
SelectedFile: File = null;
subcategory:any=[];
subcategoryarray:any=[];
categorydata:any=[];
subcategorys:any=[];
obj:any;
base64textString:any;
urls = [];
public formarray:any[]=[]
  public noimage:number=1;
  public valueimage:number=1;

subcategory_div:boolean=true;
  constructor(private myservice:MyService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
    this.units=["Add Unit","kg","litter"];
    this.stocks=["Add stock status","In Stock","Out of Stock"]
  
    this.myservice.viewsubcategory()
    .subscribe(res=>{
      console.log(res,"ssssssssssssssssssssssss")
      this.subcategory=res
      this.subcategoryarray=res
      
    });
    this.myservice.viewcategoroy()
    .subscribe(res=>{
      console.log(res)
      this.categorydata=res
      this.categorys=this.categorydata.data

    })

    this.route.params.subscribe( params =>
      
     this.myservice.geteditproductobj(params['id'])
     .subscribe(res=>{
       this.productres=res
       console.log(res)
       this.productmodel={id:this.productres.data[0]._id,product_name:this.productres.data[0].product_name,company_name:this.productres.data[0].company_name,quantity:this.productres.data[0].quantity,unit:this.productres.data[0].unit,stock_status:this.productres.data[0].stock_status,price:this.productres.data[0].price, categoryid:this.productres.data[0].categoryid,subcategoryid:this.productres.data[0].subcategoryid,description:this.productres.data[0].description,image:[]}
       
     })
  )
 }

//  onFileSelected(event){
//   this.SelectedFile = <File>event.target.files[0];
//   console.log(this.SelectedFile)
// }
onFileSelected(evt,i){
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this,i);

    reader.readAsBinaryString(file);
    // console.log('ssssss',reader.onload)
}
}

_handleReaderLoaded(i,readerEvt){
  // console.log(i)
 var binaryString = readerEvt.target.result;
        this.base64textString= btoa(binaryString);
        this.urls[i]=this.base64textString
      //  this.urls.push(this.base64textString)
        console.log(this.urls)
}

category(id){
  console.log(id)
  this.subcategorys=[ ]
  console.log(this.subcategory.length)
for (var i =0;i<this.subcategoryarray.length; i++){

if(this.subcategoryarray[i].categoryid==id){
  console.log('hello')
  this.obj={}
   this.obj._id=this.subcategoryarray[i]._id
   this.obj.subcategory=this.subcategoryarray[i].subcategory
   this.subcategorys.push(this.obj)
}

}
  
   this.subcategory=this.subcategorys
   if(this.subcategory.length>0){
    this.subcategory_div=true;
   }else{
     this.subcategory_div=false;
   }
}

  onSubmit(){
    console.log("YYYYYYYYYYYYYYYYYYYYYY",JSON.stringify(this.urls),"YYYYYYYYYYYYYYYYYYYY")
    console.log(this.productmodel)
    this.productmodel.image=this.urls;
    // const fb = new FormData();
    // fb.append('image', this.urls)
    // fb.append('id',this.productmodel.id)
    // fb.append('product_name', this.productmodel.product_name)
    // fb.append('company_name', this.productmodel.company_name)
    // fb.append('quantity', this.productmodel.quantity)
    // fb.append('unit', this.productmodel.unit)
    // fb.append('stock_status', this.productmodel.stock_status)
    // fb.append('price', this.productmodel.price)
    // fb.append('categoryid', this.productmodel.categoryid);
    // fb.append('subcategoryid', this.productmodel.subcategoryid);

    // fb.append('description', this.productmodel.description)


    this.myservice.updateproduct(this.productmodel)
    .subscribe(res=>{
      console.log
      this.router.navigate(['/viewproduct']);
    })
  }


  addimage(noimage,valueimage){
    if(noimage<=4){
    var obj={value:1+valueimage}
    this.formarray.push(obj)
    this.valueimage=valueimage+1;
    this.noimage=noimage+1
    console.log(this.noimage)
  }
  }


  delteimage(index,no){
    console.log("hello")
      if(no>0){ 
      this.noimage=no-1;
      this.formarray.splice(index,1);
      this.urls.splice(index,1)
      // this.urls[index]=null
      console.log(this.urls)
    }
  }

}

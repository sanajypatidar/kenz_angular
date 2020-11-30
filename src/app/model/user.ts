export class User {
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    password_confirmation?:string;
    date?:string;
    status?:string;
    usertype?:string;
    phone:string;
    companyName:string;
    gstinNo:string;
    address:string;
}



export class Order {
    id?:number;
    category:string;
    subcategory:string;
    image?:any;
    total:number;
    orderdetail:orderdetail[]
     logo?:any;
}

export class orderdetail {
    state:string;
    city:string;
    address:string;
    size:string;
    no_piece:number;
}


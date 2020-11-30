import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './kinz/user-signup/user-signup.component';
import { UserLoginComponent } from './kinz/user-login/user-login.component';
import { DashboardComponent } from './kinz/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './kinz/forget-password/forget-password.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UsertypeGuard } from './usertype.guard';
import { ChangePasswordComponent } from './kinz/change-password/change-password.component';
import { HomeComponent } from './kinz/home/home.component';
import { NewOrderComponent } from './kinz/new-order/new-order.component';
import { PurchaseComponent } from './kinz/purchase/purchase.component';
import { OrderStatusComponent } from './kinz/order-status/order-status.component';
import { PantsComponent } from './kinz/pants/pants.component';
import { HouseKeepingComponent } from './kinz/house-keeping/house-keeping.component';
import { BlazerComponent } from './kinz/blazer/blazer.component';
import { TShirtComponent } from './kinz/t-shirt/t-shirt.component';
import { ShirtComponent } from './kinz/shirt/shirt.component';
import { ClinteleComponent } from './kinz/clintele/clintele.component';
import { ProductComponent } from './kinz/product/product.component';
import { FinancialsComponent } from './kinz/financials/financials.component';
import { InvoiceComponent } from './kinz/invoice/invoice.component';
import { ChefCoatComponent } from './kinz/chef-coat/chef-coat.component';


const routes: Routes = [
  {path:"signup",component:UserSignupComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"Home",component:HomeComponent,canActivate:[AuthGuard],data:{expectedRole: 'user'}},
  
  {path:"change_password",component:ChangePasswordComponent, canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},
  {path:"forget_password",component:ForgetPasswordComponent},
  {path:"new_order",component:NewOrderComponent ,canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},
  {path:"purchase_history",component:PurchaseComponent,canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},
  {path:"order_status",component:OrderStatusComponent,canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},  
   {path:"pants",component:PantsComponent},
   {path:"house-keeping",component:HouseKeepingComponent},
   {path:"blazer",component:BlazerComponent},
   {path:"t-shirt",component:TShirtComponent},
   {path:"shirt",component:ShirtComponent},
   {path:"clientele",component:ClinteleComponent},
   {path:"product",component:ProductComponent},
   {path:"financials",component:FinancialsComponent,canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},
   {path:"chefcoat",component:ChefCoatComponent},

   {path:"Invoice/:id",component:InvoiceComponent,canActivate:[AuthGuard],  data: { 
    expectedRole: 'user'
  }},
  {path:"admin",loadChildren:() => import('../app/admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard],data: { 
    expectedRole: 'admin'
  } },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"login",component:UserLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

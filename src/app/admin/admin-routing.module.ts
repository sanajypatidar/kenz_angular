import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { DashboardComponent } from '../kinz/dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  
  {path:"dashboard",component:IndexComponent},
  {path:"user",component:UserComponent},
  {path:"category",component:ViewcategoryComponent},
  {path:"subcategory",component:SubcategoryComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"addcategory/:id",component:AddcategoryComponent},
  {path:"addsubcategory",component:AddSubcategoryComponent},
  {path:"subcategory/:id",component:AddSubcategoryComponent},
  {path:"order",component:OrderComponent},

  {path:"",component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserComponent } from './user/user.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { OrderComponent } from './order/order.component';
// import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    IndexComponent,
    SidebarComponent,
    TopbarComponent,
    UserComponent,
    SubcategoryComponent,
    ViewcategoryComponent,
    AddcategoryComponent,
    AddSubcategoryComponent,
    OrderComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    
    ReactiveFormsModule

  ]


})
export class AdminModule { }
 
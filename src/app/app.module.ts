import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './kinz/user-login/user-login.component';
import { UserSignupComponent } from './kinz/user-signup/user-signup.component';
import { from } from 'rxjs';
import { HeaderComponent } from './kinz/header/header.component';
import { FooterComponent } from './kinz/footer/footer.component';
import { DashboardComponent } from './kinz/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './kinz/forget-password/forget-password.component';
import { ChangePasswordComponent } from './kinz/change-password/change-password.component';
import { HomeComponent } from './kinz/home/home.component';
import { NewOrderComponent } from './kinz/new-order/new-order.component';
import { OnlyNumberDirective } from './only-number.directive';
import { PurchaseComponent } from './kinz/purchase/purchase.component';
import { OrderStatusComponent } from './kinz/order-status/order-status.component';
import { TShirtComponent } from './kinz/t-shirt/t-shirt.component';
import { BlazerComponent } from './kinz/blazer/blazer.component';
import { ShirtComponent } from './kinz/shirt/shirt.component';
import { PantsComponent } from './kinz/pants/pants.component';
import { ChefCoatComponent } from './kinz/chef-coat/chef-coat.component';
import { HouseKeepingComponent } from './kinz/house-keeping/house-keeping.component';
import { ClinteleComponent } from './kinz/clintele/clintele.component';
import { ProductComponent } from './kinz/product/product.component';
import { FinancialsComponent } from './kinz/financials/financials.component';
import { InvoiceComponent } from './kinz/invoice/invoice.component';
import { TestComponent } from './test/test.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
    NewOrderComponent,
    OnlyNumberDirective,
    PurchaseComponent,
    OrderStatusComponent,
    TShirtComponent,
    BlazerComponent,
    ShirtComponent,
    PantsComponent,
    ChefCoatComponent,
    HouseKeepingComponent,
    ClinteleComponent,
    ProductComponent,
    FinancialsComponent,
    InvoiceComponent,
    TestComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    ReactiveFormsModule

  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailsComponent, ProductItemComponent, NavBarComponent, CartComponent, CartItemComponent, UserFormComponent, SuccessComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

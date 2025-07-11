import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { OwnerComponent } from './components/owner/owner.component';
import { AddProductComponent } from './components/owner/add-product/add-product.component';
import { UpdateProductComponent } from './components/owner/update-product/update-product.component';
import { OwnerChatsComponent } from './components/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductDetailsComponent,
    AdminComponent,
    OwnerComponent,
    AddProductComponent,
    UpdateProductComponent,
    OwnerChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

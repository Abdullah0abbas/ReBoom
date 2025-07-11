import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { OwnerComponent } from './components/owner/owner.component';
import { AddProductComponent } from './components/owner/add-product/add-product.component';
import { UpdateProductComponent } from './components/owner/update-product/update-product.component';
import { OwnerChatsComponent } from './components/chats/chats.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'admin', component: AdminComponent }, //  canActivate: [AuthGuardService]
  { path: 'owner', component: OwnerComponent },
  { path: 'owner/add-product', component: AddProductComponent },
  { path: 'owner/update-product', component: UpdateProductComponent },
  { path: 'chats', component: OwnerChatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

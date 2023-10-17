import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  { path: 'admins', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  {path:'**' , redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

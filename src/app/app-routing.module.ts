import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { HomeComponent } from './page/home/home.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { CalcoriesComponent } from './page/calcories/calcories.component';
import { FoodComponent } from './page/food/food.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { WeightComponent } from './page/weight/weight.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [{
  path:'',
  component: PublicZoneComponent ,
  children : [{
    path: '' , component : HomeComponent   
  } ,{
    path: 'login', component : LoginComponent
  },{
    path: 'register', component : RegisterComponent
  },{
    path: 'phonelogin', component : PhoneLoginComponent
  },{
    path: 'home', component : HomeComponent
  }     
]
},{
  path: 'admin' , 
  component : PrivateZoneComponent ,
  children : [{
    path:'', component : DashboardComponent
  },{
    path:'dashboard', component : DashboardComponent
  },{
    path:'calories', component : CalcoriesComponent
  },{
    path:'food', component : FoodComponent
  },{
    path:'foodlist', component : FoodListComponent
  },{
    path:'sleep', component : SleepComponent
  },{
    path:'weight', component : WeightComponent
  },{
    path:'profile', component : ProfileComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

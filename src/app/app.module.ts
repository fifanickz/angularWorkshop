import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CalcoriesComponent } from './page/calcories/calcories.component';
import { FoodComponent } from './page/food/food.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { WeightComponent } from './page/weight/weight.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DashboardItemComponent } from './component/dashboard-item/dashboard-item.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { TrimCreditCardPipe } from './pipe/trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PublicZoneComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PhoneLoginComponent,
    PrivateZoneComponent,
    DashboardComponent,
    CalcoriesComponent,
    FoodComponent,
    FoodListComponent,
    WeightComponent,
    SleepComponent,
    ProfileComponent,
    DashboardItemComponent,
    TrimCreditCardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Error404Component } from './components/error404/error404.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { HomePageComponent } from './pages/home/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    DashboardPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,VehiculosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

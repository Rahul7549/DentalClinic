import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomescreenComponent } from './homescreen/homescreen.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomescreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

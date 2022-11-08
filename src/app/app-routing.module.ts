import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/dashboard/header/header.component';
import { HomescreenComponent } from './modules/dashboard/homescreen/homescreen.component';


const routes: Routes = [
  {path:'' ,component:HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

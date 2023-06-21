import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirenmaskComponent } from './airenmask/airenmask.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'airenmask', component: AirenmaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

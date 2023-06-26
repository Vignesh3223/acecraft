import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirenmaskComponent } from './airenmask/airenmask.component';
import { CollegeComponent } from './college/college.component';
import { NotesComponent } from './notes/notes.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SchoolComponent } from './school/school.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'airenmask', component: AirenmaskComponent
  },
  {
    path: 'college', component: CollegeComponent
  },
  {
    path: 'notes', component: NotesComponent
  },
  {
    path: 'enterprise', component: EnterpriseComponent
  },
  {
    path: 'school', component: SchoolComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

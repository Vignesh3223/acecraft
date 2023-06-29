import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirenmaskComponent } from './airenmask/airenmask.component';
import { CollegeComponent } from './college/college.component';
import { NotesComponent } from './notes/notes.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SchoolComponent } from './school/school.component';
import { HondaComponent } from './honda/honda.component';
import { ViewProductComponent } from './honda/view-product/view-product.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { ViewItemComponent } from './uniforms/view-item/view-item.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
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
  {
    path: 'honda', component: HondaComponent
  },
  {
    path: 'viewProduct/:id', component: ViewProductComponent
  },
  {
    path: 'uniforms', component: UniformsComponent
  },
  {
    path: 'viewItem/:id', component: ViewItemComponent
  },
  {
    path: 'cartitems', component: CartitemComponent
  },
  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

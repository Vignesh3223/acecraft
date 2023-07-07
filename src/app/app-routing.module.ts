import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Home Component
import { HomeComponent } from './home/home.component';
//Airen mask Component
import { AirenmaskComponent } from './airenmask/airenmask.component';
//College Component
import { CollegeComponent } from './college/college.component';
//Notes Component
import { NotesComponent } from './notes/notes.component';
//Viewnote Component (child of Notes)
import { ViewnoteComponent } from './notes/viewnote/viewnote.component';
//Enterprise Component
import { EnterpriseComponent } from './enterprise/enterprise.component';
//School Component
import { SchoolComponent } from './school/school.component';
//Honda Component
import { HondaComponent } from './honda/honda.component';
//ViewProduct Component (child of Honda)
import { ViewProductComponent } from './honda/view-product/view-product.component';
//Uniforms Component
import { UniformsComponent } from './uniforms/uniforms.component';
//ViewItem Component (child of Uniforms)
import { ViewItemComponent } from './uniforms/view-item/view-item.component';
//Cart Component
import { CartitemComponent } from './cartitem/cartitem.component';
//Login Component
import { LoginComponent } from './login/login.component';
//Register Component
import { RegisterComponent } from './register/register.component';
//Order status Component
import { OrderComponent } from './order/order.component';
//Contact Component
import { ContactComponent } from './contact/contact.component';
//Authentication Guard
import { AuthGuard } from 'src/shared/auth.guard';

const routes: Routes = [
  //Home Component route path
  {
    path: '', component: HomeComponent
  },
  //Airen mask Component route path
  {
    path: 'airenmask', component: AirenmaskComponent
  },
  //College Component route path
  {
    path: 'college', component: CollegeComponent
  },
  //Notes Component route path
  {
    path: 'notes', component: NotesComponent
  },
  //Viewnote Component route path (based on id)
  {
    path: 'viewNote/:id', component: ViewnoteComponent
  },
  //Enterprise Component route path
  {
    path: 'enterprise', component: EnterpriseComponent
  },
  //School Component route path
  {
    path: 'school', component: SchoolComponent
  },
  //Honda Component route path
  {
    path: 'honda', component: HondaComponent
  },
  //ViewProduct Component route path (based on id)
  {
    path: 'viewProduct/:id', component: ViewProductComponent
  },
  //Uniforms Component route path
  {
    path: 'uniforms', component: UniformsComponent
  },
  //ViewItem Component route path (based on id)
  {
    path: 'viewItem/:id', component: ViewItemComponent
  },
  //Cart Component route path
  {
    path: 'cartitems', component: CartitemComponent, canActivate: [AuthGuard]
  },
  //Login Component route path
  {
    path: 'login', component: LoginComponent
  },
  //Register Component route path
  {
    path: 'register', component: RegisterComponent
  },
  //Order Status Component route path
  {
    path: 'order', component: OrderComponent
  },
  //Contact Component route path
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

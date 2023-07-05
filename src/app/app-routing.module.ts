import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirenmaskComponent } from './airenmask/airenmask.component';
import { CollegeComponent } from './college/college.component';
import { NotesComponent } from './notes/notes.component';
import { ViewnoteComponent } from './notes/viewnote/viewnote.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SchoolComponent } from './school/school.component';
import { HondaComponent } from './honda/honda.component';
import { ViewProductComponent } from './honda/view-product/view-product.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { ViewItemComponent } from './uniforms/view-item/view-item.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from 'src/shared/auth.guard';

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
    path: 'viewNote/:id', component: ViewnoteComponent
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
    path: 'cartitems', component: CartitemComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

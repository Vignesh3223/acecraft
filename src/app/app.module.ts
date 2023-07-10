import { NgModule } from '@angular/core';
//Browser Module
import { BrowserModule } from '@angular/platform-browser';
//BrowserAnimations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Forms Module
import { FormsModule } from '@angular/forms';
//ReactiveForms Module
import { ReactiveFormsModule } from '@angular/forms';
//Routing Module
import { AppRoutingModule } from './app-routing.module';
//HTTPclient Module
import { HttpClientModule } from '@angular/common/http';
//App Component
import { AppComponent } from './app.component';
//Navbar Component
import { NavbarComponent } from './navbar/navbar.component';
//primeng Badge Module
import { BadgeModule } from 'primeng/badge';
//Home Component
import { HomeComponent } from './home/home.component';
//Footer Component
import { FooterComponent } from './footer/footer.component';
//Airen mask Component
import { AirenmaskComponent } from './airenmask/airenmask.component';
//College Component
import { CollegeComponent } from './college/college.component';
//primeng Dialog Module
import { DialogModule } from 'primeng/dialog';
//primeng Button Module
import { ButtonModule } from 'primeng/button';
//Notes Component
import { NotesComponent } from './notes/notes.component';
import { CardModule } from 'primeng/card';
//Enterprise Component
import { EnterpriseComponent } from './enterprise/enterprise.component';
//primeng Timeline Module
import { TimelineModule } from 'primeng/timeline';
//School Component
import { SchoolComponent } from './school/school.component';
//Viewnote Component
import { ViewnoteComponent } from './notes/viewnote/viewnote.component';
//Honda Component
import { HondaComponent } from './honda/honda.component';
//SingleProduct Component
import { SingleProductComponent } from './honda/single-product/single-product.component';
//ViewProduct Component
import { ViewProductComponent } from './honda/view-product/view-product.component';
//primeng Carousel Module
import { CarouselModule } from 'primeng/carousel';
//Pipe
import { HondasortPipe } from '../shared/sort.pipe';
//ProductList Component
import { ProductListComponent } from './honda/product-list/product-list.component';
//Uniforms Component
import { UniformsComponent } from './uniforms/uniforms.component';
//SingleItem Component
import { SingleItemComponent } from './uniforms/single-item/single-item.component';
//ViewItem Component
import { ViewItemComponent } from './uniforms/view-item/view-item.component';
//ItemsList Component
import { ItemsListComponent } from './uniforms/items-list/items-list.component';
//Cartitem Component
import { CartitemComponent } from './cartitem/cartitem.component';
//Login Component
import { LoginComponent } from './login/login.component';
//Register Component
import { RegisterComponent } from './register/register.component';
//Order Status Component
import { OrderComponent } from './order/order.component';
//Contact Component
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AirenmaskComponent,
    CollegeComponent,
    NotesComponent,
    EnterpriseComponent,
    SchoolComponent,
    ViewnoteComponent,
    HondaComponent,
    SingleProductComponent,
    ViewProductComponent,
    HondasortPipe,
    ProductListComponent,
    UniformsComponent,
    SingleItemComponent,
    ViewItemComponent,
    ItemsListComponent,
    CartitemComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BadgeModule,
    DialogModule,
    ButtonModule,
    CardModule,
    TimelineModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

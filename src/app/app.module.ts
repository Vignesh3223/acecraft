import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BadgeModule } from 'primeng/badge';
import { HomeComponent } from './home/home.component';
import { SplitterModule } from 'primeng/splitter';
import { FooterComponent } from './footer/footer.component';
import { AirenmaskComponent } from './airenmask/airenmask.component';
import { CollegeComponent } from './college/college.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NotesComponent } from './notes/notes.component';
import { CardModule } from 'primeng/card';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TimelineModule } from 'primeng/timeline';
import { SchoolComponent } from './school/school.component';
import { ViewnoteComponent } from './notes/viewnote/viewnote.component';
import { HondaComponent } from './honda/honda.component';
import { SingleProductComponent } from './honda/single-product/single-product.component';
import { ViewProductComponent } from './honda/view-product/view-product.component';
import { CarouselModule } from 'primeng/carousel';
import { HondasortPipe } from '../shared/sort.pipe';
import { ProductListComponent } from './honda/product-list/product-list.component';
import { UniformsComponent } from './uniforms/uniforms.component';
import { SingleItemComponent } from './uniforms/single-item/single-item.component';
import { ViewItemComponent } from './uniforms/view-item/view-item.component';
import { ItemsListComponent } from './uniforms/items-list/items-list.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

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
    UserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BadgeModule,
    SplitterModule,
    DialogModule,
    ButtonModule,
    CardModule,
    TimelineModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

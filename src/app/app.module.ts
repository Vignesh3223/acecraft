import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BadgeModule,
    SplitterModule,
    DialogModule,
    ButtonModule,
    CardModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

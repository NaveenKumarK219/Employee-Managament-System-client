import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FullCalendarModule} from '@fullcalendar/angular';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveCalendarComponent, LeaveRequestFormComponent } from './leave-calendar/leave-calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaveCalendarComponent,
    EmployeesComponent,
    LeaveFormComponent,
    LeaveRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FullCalendarModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  entryComponents: [
    LeaveRequestFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

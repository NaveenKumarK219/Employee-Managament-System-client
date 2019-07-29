import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveCalendarComponent } from './leave-calendar/leave-calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'leave-calendar', component: LeaveCalendarComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'leave-request', component: LeaveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

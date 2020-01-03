import { ActivityPanelComponent } from './component/activity-panel/activity-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { RouteGuardService } from './services/route.guard.service';
import { EmployeeInfoComponent } from './component/employee-info/employee-info.component';
import { DepartmentInfoComponent } from './component/department-info/department-info.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'home' , canActivate: [RouteGuardService], component: HomeComponent,
    children: [ 
      {
        path: 'activity', canLoad: [RouteGuardService], component: ActivityPanelComponent,
      },
      {
        path: 'emp', canLoad: [RouteGuardService], component: EmployeeInfoComponent,
      },
      {
        path: 'dept', canLoad: [RouteGuardService], component: DepartmentInfoComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

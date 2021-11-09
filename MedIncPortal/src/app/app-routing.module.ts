import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component'
import { IncentiveComponent } from './Components/incentive/incentive.component';

const routes: Routes = [  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'incentive', component: IncentiveComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

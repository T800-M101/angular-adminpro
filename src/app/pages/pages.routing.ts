import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    //Aqui el path vacio tiene componente porque usa su propio <outlet-router>
    path:'dashboard',
    component:PagesComponent,
    children: [
     {path: '', component:DashboardComponent, data:{titulo: 'Dashboard'}},
     {path: 'progress', component:ProgressComponent, data:{titulo: 'ProgressBar'}},
     {path: 'grafica1', component:Grafica1Component,data:{titulo: 'Graphics'}},
     {path: 'account-settings', component:AccoutSettingsComponent,data:{titulo: 'Theme adjustments'}},
     {path: 'promesas', component:PromesasComponent, data:{titulo: 'Promises'}},
     {path: 'rxjs', component:RxjsComponent, data:{titulo: 'RxJS'}},

   ]
 }
];

@NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule]
})
export class PagesRoutingModule{}

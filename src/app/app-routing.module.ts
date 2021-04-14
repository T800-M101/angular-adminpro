import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // Para trabajar con directivas como *ngIf y *ngFor En este nodulo no hace falta
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Grafica1Component } from "./pages/grafica1/grafica1.component";
import { Err404Component } from "./pages/err404/err404.component";
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
   {
     path:'',
     component:PagesComponent,
     children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'progress', component:ProgressComponent},
      {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },


   {path: 'register', component:RegisterComponent},
   {path: 'grafica1', component:Grafica1Component},
   {path: 'login', component:LoginComponent},

   {path: '**', component:Err404Component},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

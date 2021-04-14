import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // Para trabajar con directivas como *ngIf y *ngFor En este nodulo no hace falta
import { RouterModule, Routes } from "@angular/router";

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from "./auth/auth.routing";


import { Err404Component } from "./err404/err404.component";


const routes: Routes = [

   // path: '/dashboard PagesRouting'
   // path: '/auth AuthRouting'
   // path: '/medicos MedicosRouting'
   // path: '/compras ComprasRouting'
   {path: '', redirectTo:'/dashboard', pathMatch:'full'},
   {path: '**', component:Err404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

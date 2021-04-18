import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para poder usar el <outlet-router>
import { FormsModule } from '@angular/forms';

//Modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccoutSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule, //Tambien se puede usar el AppRoutingModule
    FormsModule, // Para trabajar con el ngModel
    ComponentsModule,

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccoutSettingsComponent
  ]
})
export class PagesModule { }

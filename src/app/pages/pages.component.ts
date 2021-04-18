import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Este declare permite que Angular cargue  una funcion global que inicializa todos los scripts que se inician en el index.html
declare function customInitFunctions():void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {




  constructor(private settingService:SettingsService) { }

  ngOnInit(): void {
    //Reinicializar los scripts del index.html
    customInitFunctions();
  }

}

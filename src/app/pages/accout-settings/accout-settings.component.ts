import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {



  constructor(private settingService:SettingsService) { }

  ngOnInit(): void {
   this.settingService.checkCurrentTheme();
  }

  changeTheme(theme:string){
    // Cambiando tema
    this.settingService.changeTheme(theme);

  }


}

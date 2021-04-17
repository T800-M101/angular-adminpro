import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progresoPadre1 = 50;
  progresoPadre2 = 25;

  get porcentaje1() {
    return `${this.progresoPadre1}%`;
  }

  get porcentaje2() {
    return `${this.progresoPadre2}%`;
  }


}

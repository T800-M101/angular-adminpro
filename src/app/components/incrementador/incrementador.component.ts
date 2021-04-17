import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }



  @Input() progresoHijo!:number;
  @Input() btnClass:string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();



  cambiarValor(valor:number){

    if(this.progresoHijo >= 100 && valor >= 0){
      this.progresoHijo = 100;
      this.valorSalida.emit(this.progresoHijo);
      return;
    }


    if(this.progresoHijo <= 0 && valor < 0){
      this.progresoHijo = 0;
      this.valorSalida.emit(this.progresoHijo);
      return;
    }

    this.progresoHijo += valor;
    this.valorSalida.emit(this.progresoHijo);
  }

  onChange(event:number){

    if(event >= 100){
      this.progresoHijo = 100
    }else if(event <= 0){
      this.progresoHijo = 0
    }else {
      this.progresoHijo = event;
    }
     this.valorSalida.emit(this.progresoHijo);
  }

}

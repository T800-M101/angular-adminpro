import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labelsGastos:string[] = ['January Expenses', 'Febrary Expenses', 'March Expenses'];
  public dataGastos =[
    [50, 45, 200]
  ] ;

  public labelsEmpleados:string[] = ['Developers', 'Accountants', 'Trainers'];
  public dataEmpleados =[
    [20, 150, 20]
  ] ;

  public labelsOtros:string[] = ['Refounds', 'Travels', 'Others'];
  public dataOtros =[
    [2500, 4500, 200]
  ] ;


  constructor() { }

  ngOnInit(): void {
  }



}

import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
      // Doughnut
      @Input('labels') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
      @Input('data') public doughnutChartData: MultiDataSet = [
        [350, 450, 100],

      ];
      @Input()titulo:string = '';

      public doughnutChartType: ChartType = 'doughnut';
      public colors: Color[]=[
        {backgroundColor: ['#6857E6','#009FEE','#F02059']}
      ]



     constructor() { }

  ngOnInit(): void {
  }


      // events
    // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

    // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

}

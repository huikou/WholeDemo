import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-breakdown-chart',
  templateUrl: './revenue-breakdown-chart.component.html',
  styleUrls: ['./revenue-breakdown-chart.component.css']
})
export class RevenueBreakdownChartComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  chartData:number[] = [350, 450, 100];
 
  constructor() { }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
  }
}

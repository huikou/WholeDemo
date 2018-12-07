import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referal-source-chart',
  templateUrl: './referal-source-chart.component.html',
  styleUrls: ['./referal-source-chart.component.css']
})
export class ReferalSourceChartComponent implements OnInit {
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  constructor() { }

  ngOnInit() {
  }

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }

}

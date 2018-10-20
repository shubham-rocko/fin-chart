import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
  } from "@angular/core";
  import { FinChartService } from "./fin-chart.service";
  declare var Snap: any;
  
  @Component({
    selector: "app-combo-chart",
    templateUrl: "./combo-chart.component.html",
    styleUrls: ["./combo-chart.component.css"]
  })
  export class FinChartComponent implements OnChanges {
    @Input()
    width: number;
    @Input()
    height: number;
    @Input()
    chartDataSource: Object;
    public dataSource: object = {
      chart: {
        caption: "",
        theme: "fusion"
      },
      data: []
    };
  
    public svgWidth;
    public svgHeight;
  
    constructor(private finChartService: FinChartService) {}
  
    ngOnChanges(changes: SimpleChanges) {
      if (
        changes.chartDataSource.currentValue &&
        changes.chartDataSource.currentValue.data.length
      ) {
        this.svgWidth = this.width+50;
        this.svgHeight = this.height;
        this.finChartService.setChartHeightWidth(this.width, this.height);
        var chartDataSource = changes.chartDataSource.currentValue;
        this.dataSource["data"] = [];
        this.finChartService.s = Snap("#invitation-svgout");
        if (this.finChartService.parentGroup) {
          this.finChartService.parentGroup.remove();
        }
        this.finChartService.parentGroup = this.finChartService.s
          .group()
          .attr({ id: "chart-parentgroup" });
        if (chartDataSource && chartDataSource["data"].length) {
          for (var i = 0; i < chartDataSource["data"].length; i++) {
            var tempData = {
              label: chartDataSource["data"][i].label,
              value: chartDataSource["data"][i].value
            };
            this.dataSource["data"].push(tempData);
          }
        }
        this.finChartService.createChartBox(this.dataSource);
  
        this.finChartService.createChartUsingData(this.dataSource);
        console.log(changes.chartDataSource.currentValue.data);
      }
    }
  }
  
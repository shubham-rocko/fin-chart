import { NgModule, ModuleWithProviders } from "@angular/core";
import { FinChartComponent } from "./fin-chart.component";
import { FinChartService } from "./fin-chart.service";

export * from "./fin-chart.service";
export * from "./fin-chart.component";

@NgModule({
  imports: [],
  declarations: [FinChartComponent],
  exports: [FinChartComponent],
  providers: [FinChartService]
})
export class SvgFinChartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SvgFinChartModule,
      providers: [FinChartService]
    };
  }
}

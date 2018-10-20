# fin-chart

simple svg chart with finChart

**It's still in active developement**

### Installation

`npm i combo-chart`
`npm install --save snapsvg`
`npm install --save @types/snapsvg`

you need to import `SVGFinChartModule`.

```
  import { NgModule } from '@angular/core';
  import { SVGFinChartModule } from 'fin-chart/fin-chart';
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [AppComponent],
    imports: [SVGFinChartModule],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

### Getting started

Using fin-chart by component.
_app.component.html_:

```html
<fin-chart [width]="width" [height]="height" [chartDataSource]="dataSource"></fin-chart>
```

_app.component.ts_:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public width = 640;
  public height = 400;
  public dataSource = {
    chart: {
      caption: "", //development phase
      theme: "" //development phase
    },
    data: [
      { label: "Views", value: "10" },
      {
        label: "Automation Starts",
        value: "8"
      },
      {
        label: "Completions",
        value: "6"
      },
      { label: "Leads", value: "4" }
    ]
  };
}
```

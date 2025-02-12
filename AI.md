---
name: chartjs-scatter
description: The chartjs-scatter component utilizes the Chart.js library to render customizable scatter charts, offering features like regression lines, legend positioning, and both guided and advanced data configuration modes.
keywords:
  - scatter chart
  - chart.js
  - regression lines
  - data visualization
  - legend customization
  - guided mode
  - advanced mode
  - responsive design
  - data binding
  - event handling
---

#### chartjs-scatter

Renders a scatter chart using Chart.js library with regression lines and customizable styling.

Properties:
- isLegend: boolean - Show legend. Default: true
- legendPosition: 'top'|'bottom'|'left'|'right' - Legend position. Default: 'top'
- legendAlignement: 'start'|'center'|'end' - Legend alignment. Default: 'center'
- legendSize: number - Legend font size in pixels. Default: 12
- legendColor: string|null - Legend label color. Default: null
- labelColor: string|null - Axis label color. Default: null
- gridColor: string|null - Grid line color. Default: null
- startAtZero: boolean - Axes start at zero. Default: true
- showLinearRegression: boolean - Show regression lines. Default: false
- dataType: string - Sets the configuration mode. **CRITICAL** Always set to "advanced".
- labels: binded<string[]> - X-axis labels. advanced mode only.
- datasets: binded<object[]> - Dataset objects with label, backgroundColor, borderColor, data keys. advanced mode only.
- options: binded<object> - Advanced chart options. advanced mode only.
- xAxisTitle: string - X-axis title (guided)
- dataXField: string - X-axis field (guided)
- dataXFieldProperty: string|null - X-axis field property (guided). Default: null
- dataXEmpty: boolean - Include empty x values (guided). Default: false
- yAxis: 'item-count'|'field-summary' - Y-axis type (guided). Default: 'item-count'
- dataYField: string - Y-axis field (guided)
- dataYFieldProperty: string|null - Y-axis field property (guided). Default: null
- aggregate: 'distinct'|'value'|'sum'|'average'|'median'|'min'|'max' - Aggregation - function (guided). Default: 'distinct'
- groupBy: string - Group by field (guided)
- groupByProperty: string|null - Group by field property (guided). Default: null
- colors: string[] - Dataset colors (guided). Default: []

Children: none

Events:
- chart:click
  Payload: {dataX: number, dataY: number, position: {x: number, y: number}, points: [{label: string, value: number, index: number, datasetIndex: number}]}
  Description: Triggered when clicking on the chart, providing coordinates and clicked point data

Variables: none

Note: 
- To make graph responsive: First, always set these options : responsive: true and maintainAspectRatio: false, Second, set min-width: 0px to direct parent container.
- **IMPORTANT** labels, datasets, options and data properties HAVE TO BE BINDED data
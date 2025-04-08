---
name: chartjs-scatter
description: A Chart.js-based scatter chart component with regression lines and customizable styling..
keywords: [scatter chart, chart.js, regression lines, data visualization, legend customization, guided mode, advanced mode, responsive design, data binding, event handling]
---

#### chartjs-scatter

***Purpose:***
Renders a customizable scatter chart using Chart.js library, featuring regression lines, legend positioning.

***Features:***
- Regression line support
- Customizable legend positioning and styling
- Responsive design capabilities
- Data binding support
- Interactive event handling

***Properties:***
- dataType: string - Sets the configuration mode. **CRITICAL** Always set to "advanced"
- labels: binded<string[]> - X-axis labels.
- datasets: binded<object[]> - Dataset objects with label, backgroundColor, borderColor, data keys.
- options: binded<object> - Advanced chart options.
- isLegend: boolean - Show legend. Default: true
- legendPosition: 'top'|'bottom'|'left'|'right' - Legend position. Default: 'top'
- legendAlignement: 'start'|'center'|'end' - Legend alignment. Default: 'center'
- legendSize: number - Legend font size in pixels. Default: 12
- legendColor: string|null - Legend label color. Default: null
- labelColor: string|null - Axis label color. Default: null
- gridColor: string|null - Grid line color. Default: null
- startAtZero: boolean - Axes start at zero. Default: true
- showLinearRegression: boolean - Show regression lines. Default: false

***Events:***
- chart:click: Triggered when clicking on the chart. Payload: {dataX: number, dataY: number, position: {x: number, y: number}, points: [{label: string, value: number, index: number, datasetIndex: number}]}

***Notes:***
- ALWAYS MAKE IT RESPONSIVE: Set these options: responsive: true and maintainAspectRatio: false, PLUS, set min-width: 0px to direct parent container.
- **IMPORTANT**: labels, datasets, options and data properties HAVE TO BE BINDED data using {"js":"..."}
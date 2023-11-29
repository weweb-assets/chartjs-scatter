/* wwEditor:start */
import propertiesTooltips from './propertiesTooltips';
/* wwEditor:end */

function isDataValid(data) {
    const cData = (!data || Array.isArray(data) ? data : data.data) || null;
    return data && Array.isArray(cData);
}
function isDataArrayObject(data) {
    const cData = (!data || Array.isArray(data) ? data : data.data) || null;
    return data && Array.isArray(cData) && typeof cData[0] === 'object';
}

export default {
    editor: {
        label: 'Chart - Scatter',
        icon: 'logos/chartjs',
        customStylePropertiesOrder: [
            ['isLegend', 'legendPosition', 'legendAlignement', 'legendSize', 'legendColor'],
            ['axis', 'stacked', 'startAtZero', 'showLinearRegression', 'labelColor', 'gridColor'],
        ],
        customSettingsPropertiesOrder: [
            'dataType',
            ['labels', 'datasets', 'options'],
            'data',
            'dataError',
            ['xAxisTitle', 'dataXField', 'dataXFieldProperty', 'dataXEmpty'],
            ['yAxis', 'dataYField', 'dataYFieldProperty', 'aggregate', 'groupBy', 'groupByProperty'],
            ['colors'],
        ],
    },
    triggerEvents: [
        {
            name: 'chart:click',
            label: { en: 'On chart click' },
            event: {
                dataX: null,
                dataY: null,
                position: { x: 0, y: 0 },
                points: [{ label: '', value: 0, index: 0, datasetIndex: 0 }],
            },
        },
    ],
    properties: {
        isLegend: {
            label: 'Legend',
            type: 'OnOff',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: true,
            classes: true,
            hidden: content => content.dataType === 'advanced',
             /* wwEditor:start */
             bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines if the legend is displayed: `true | false`',
            },
            /* wwEditor:end */
        },
        legendPosition: {
            label: 'Position',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'top', label: 'Top' },
                    { value: 'bottom', label: 'Bottom' },
                    { value: 'left', label: 'Left' },
                    { value: 'right', label: 'Right' },
                ],
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            defaultValue: 'top',
            hidden: content => content.dataType === 'advanced' || !content.isLegend,
             /* wwEditor:start */
             bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the legend position: `top | bottom | left | right`',
            },
            /* wwEditor:end */
        },
        legendAlignement: {
            label: 'Alignment',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'start', label: 'Start' },
                    { value: 'center', label: 'Center' },
                    { value: 'end', label: 'End' },
                ],
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            defaultValue: 'center',
            hidden: content => content.dataType === 'advanced' || !content.isLegend,
             /* wwEditor:start */
             bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the legend alignment: `start | center | end`',
            },
            /* wwEditor:end */
        },
        legendSize: {
            label: 'Size',
            type: 'Length',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 0, max: 50 }],
            },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            hidden: content => content.dataType === 'advanced' || !content.isLegend,
        },
        legendColor: {
            label: 'Color',
            type: 'Color',
            options: { nullable: true },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            hidden: content => content.dataType === 'advanced' || !content.isLegend,
        },
        labelColor: {
            label: 'Label color',
            type: 'Color',
            options: { nullable: true },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            hidden: content => content.dataType === 'advanced',
        },
        gridColor: {
            label: 'Grid color',
            type: 'Color',
            options: { nullable: true },
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            hidden: content => content.dataType === 'advanced',
        },
        startAtZero: {
            label: 'Start at zero',
            type: 'OnOff',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: true,
            hidden: content => content.dataType === 'advanced',
             /* wwEditor:start */
             bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines the option start at zero: `true | false`',
            },
            /* wwEditor:end */
        },
        showLinearRegression: {
            label: 'Show linear regression',
            type: 'OnOff',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: false,
            hidden: content => content.dataType === 'advanced',
             /* wwEditor:start */
             bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that definess if the linear degression is active: `true | false`',
            },
            /* wwEditor:end */
        },
        dataType: {
            label: 'Mode',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'guided', label: 'Guided' },
                    { value: 'advanced', label: 'Advanced' },
                ],
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: 'advanced',
        },
        labels: {
            label: 'Labels',
            type: 'Info',
            options: { text: 'Chart labels' },
            section: 'settings',
            bindable: 'list',
            responsive: true,
            states: true,
            defaultValue: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah'],
            hidden: content => content.dataType !== 'advanced',
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: propertiesTooltips['labels'],
            },
            /* wwEditor:end */
        },
        datasets: {
            label: 'Datasets',
            type: 'Info',
            options: { text: 'Chart Datasets' },
            section: 'settings',
            bindable: 'list',
            responsive: true,
            states: true,
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: 'rgb(21, 101, 192)',
                    borderColor: 'rgb(21, 101, 192)',
                    data: [
                        { y: 500, x: 1 },
                        { y: 400, x: 1 },
                        { y: 450, x: 3 },
                        { y: 350, x: 3 },
                        { y: 400, x: 5 },
                        { y: 300, x: 5 },
                        { y: 350, x: 7 },
                        { y: 250, x: 7 },
                    ],
                },
            ],
            hidden: content => content.dataType !== 'advanced',
             /* wwEditor:start */
             bindingValidation: {
                type: 'array',
                tooltip: propertiesTooltips['datasets'],
            },
            /* wwEditor:end */
        },
        options: {
            label: 'Options',
            type: 'Info',
            options: {
                text: 'Chart options',
            },
            section: 'settings',
            bindable: 'list',
            responsive: true,
            states: true,
            defaultValue: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'left',
                        align: 'start',
                        labels: {
                            usePointStyle: true,
                            color: 'black',
                            font: { size: 12 },
                        },
                    },
                },
                responsive: true,
            },
            hidden: content => content.dataType !== 'advanced',
        },
        data: {
            label: 'Data',
            type: 'Info',
            options: { text: 'Bind collection data' },
            section: 'settings',
            bindable: 'list',
            responsive: true,
            states: true,
            defaultValue: null,
            hidden: content => content.dataType !== 'guided',
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'A collection of data in array format: `[{}, {}, ...]`',
            },
            /* wwEditor:end */
        },
        dataError: {
            type: 'Info',
            options: { text: '⚠️ Invalid value. Data must be an array (or a collection).' },
            section: 'settings',
            hidden: content => !(content.dataType === 'guided' && content.data && !isDataValid(content.data)),
        },
        xAxisTitle: {
            label: 'X-axis',
            section: 'settings',
            bindable: true,
            responsive: true,
            states: true,
            hidden: content =>
                !(content.dataType === 'guided' && isDataValid(content.data) && isDataArrayObject(content.data)),
        },
        dataXField: {
            label: 'Field',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data[0]) return null;
                return { object: data[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: null,
            hidden: content =>
                !(content.dataType === 'guided' && isDataValid(content.data) && isDataArrayObject(content.data)),
        },
        dataXFieldProperty: {
            label: 'Field property',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data.length) return true;
                const field = _.get(data[0], content.dataXField);
                return !Array.isArray(field) || !field.length ? null : { object: field[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: null,
            section: 'settings',
            hidden: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || null;
                if (!Array.isArray(data) || !data[0]) return true;
                const field = _.get(data[0], content.dataXField);
                return !(
                    content.dataType === 'guided' &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data) &&
                    Array.isArray(field) &&
                    field.length &&
                    typeof field[0] === 'object'
                );
            },
        },
        dataXEmpty: {
            label: 'Include empty values',
            type: 'OnOff',
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: false,
            hidden: content => !(content.dataType === 'guided' && isDataValid(content.data)),
        },
        yAxis: {
            label: 'Y-axis',
            type: 'BigIconRadioGroup',
            options: {
                choices: [
                    { icon: 'sum', value: 'item-count', label: 'Item count' },
                    { icon: 'field-sumary', value: 'field-summary', label: 'Field summary' },
                ],
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: 'item-count',
            hidden: content =>
                !(content.dataType === 'guided' && isDataValid(content.data) && isDataArrayObject(content.data)),
        },
        dataYField: {
            label: 'Field',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data[0]) return null;
                return { object: data[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: null,
            hidden: content =>
                !(
                    content.dataType === 'guided' &&
                    content.yAxis === 'field-summary' &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data)
                ),
        },
        dataYFieldProperty: {
            label: 'Field property',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data.length) return true;
                const field = _.get(data[0], content.dataYField);
                return !Array.isArray(field) || !field.length ? null : { object: field[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: null,
            section: 'settings',
            hidden: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || null;
                if (!Array.isArray(data) || !data.length) return true;
                const field = _.get(data[0], content.dataYField);
                return !(
                    content.dataType === 'guided' &&
                    content.yAxis === 'field-summary' &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data) &&
                    Array.isArray(field) &&
                    field.length &&
                    typeof field[0] === 'object'
                );
            },
        },
        aggregate: {
            label: 'Aggregate',
            type: 'TextSelect',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                let field = _.get(data[0], content.dataYField);
                const isArray = Array.isArray(field);
                if (Array.isArray(field) && field.length) field = _.get(field[0], content.dataYFieldProperty, field[0]);
                const isNumber = Number.isFinite(data[0] && content.dataYField && field);
                return {
                    placeholder: 'Select',
                    options: [
                        { value: 'distinct', label: 'Distinct' },
                        isNumber && !isArray ? { value: 'value', label: 'Value' } : null,
                        isNumber ? { value: 'sum', label: 'Sum' } : null,
                        isNumber ? { value: 'average', label: 'Average' } : null,
                        isNumber ? { value: 'median', label: 'Median' } : null,
                        isNumber ? { value: 'min', label: 'Min' } : null,
                        isNumber ? { value: 'max', label: 'Max' } : null,
                    ].filter(Boolean),
                };
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: 'distinct',
            hidden: content =>
                !(
                    content.dataType === 'guided' &&
                    content.yAxis === 'field-summary' &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data)
                ),
        },
        groupBy: {
            label: 'Group by',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data[0]) return null;
                return { object: data[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            section: 'settings',
            defaultValue: null,
            hidden: content =>
                !(
                    content.dataType === 'guided' &&
                    (content.yAxis === 'item-count' ||
                        content.aggregate === 'distinct' ||
                        content.aggregate === 'value' ||
                        content.aggregate === 'sum') &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data)
                ),
        },
        groupByProperty: {
            label: 'Group by property',
            type: 'ObjectPropertyPath',
            options: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || [];
                if (!Array.isArray(data) || !data.length) return true;
                const field = _.get(data[0], content.groupBy);
                return !Array.isArray(field) || !field.length ? null : { object: field[0] };
            },
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: null,
            section: 'settings',
            hidden: content => {
                const data = (!content.data || Array.isArray(content.data) ? content.data : content.data.data) || null;
                if (!Array.isArray(data) || !data[0]) return true;
                const field = _.get(data[0], content.groupBy);
                return !(
                    content.dataType === 'guided' &&
                    isDataValid(content.data) &&
                    isDataArrayObject(content.data) &&
                    Array.isArray(field) &&
                    field.length &&
                    typeof field[0] === 'object'
                );
            },
        },
        colors: {
            label: 'Colors',
            type: 'Array',
            section: 'settings',
            options: {
                expandable: true,
                item: {
                    type: 'Color',
                },
                getItemLabel(_, index) {
                    return `Color ${index + 1}`;
                },
            },
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: [],
            hidden: content => !(content.dataType === 'guided' && isDataValid(content.data)),
             /* wwEditor:start */
             bindingValidation: {
                type: 'array',
                tooltip: 'A collection of colors: `[color1, color2, ...]`',
            },
            /* wwEditor:end */
        },
    },
};

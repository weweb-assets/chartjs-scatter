export default {
    labels: `The labels must be defined in an array like this: \n\n
\`\`\`js
['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah', 'Bespin', 'Endor', 'Hoth'];
\`\`\``,
    datasets: `The datasets are represented as objects in an array: \n\n
\`\`\`json
[
    {
        label: 'Millenium Falcon',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [{ y: 500, x: 1 },
        { y: 400, x: 1 },
        { y: 450, x: 3 },
        { y: 350, x: 3 },
        { y: 400, x: 5 },
        { y: 300, x: 5 },
        { y: 350, x: 7 },
        { y: 250, x: 7 }],
    },
];
\`\`\``,
};

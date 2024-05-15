import React from 'react';
import ReactECharts from 'echarts-for-react';

const SalaryIncrementChart = ({ salary, collegeRankings }) => {
    const generateRandomDecimal = () => {
        return parseFloat((Math.random() * 100).toFixed(1));
    };
    const options = {
        legend: {},
        tooltip: {},
        dataset: {
            dimensions: ['product', '2021', '2022', '2023'],
            source: collegeRankings.map(ele => ({
                product: ele, 2021: generateRandomDecimal(), 2022: generateRandomDecimal(), 2023: generateRandomDecimal()
            }))
        },
        xAxis: { type: 'category' },
        yAxis: {},

        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default SalaryIncrementChart;

import React from 'react';
import ReactECharts from 'echarts-for-react';

const SavingsChart = ({ data, currency, countries }) => {
    const seriesData = countries.map(country => ({
        name: country,
        type: 'line',
        stack: 'total',
        data: data.map(value => (value > 0 ? value : 0))
    }));
    const options = {
        title: {
            text: 'Estimated Savings Over Years',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: '{b0}: {c0} ' + currency
        },
        legend: {
            data: countries.map((ele) => ele),
            left: 'center',
            top: 'bottom'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: `{value} ${currency}`
            }
        },
        series: seriesData,
    };

    return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default SavingsChart;

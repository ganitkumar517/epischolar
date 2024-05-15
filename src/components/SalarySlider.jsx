import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 100000,
        label: '1,00,000',
    },
    {
        value: 4000000,
        label: '40,00,000',
    },
];

function valuetext(value, onChange) {
    onChange(value)
    return `${value}`;
}

export default function SalarySlider({ value, onChange }) {
    return (
        <Box sx={{ width: "100%" }}>
            <label>Annual Salary (INR)</label>
            <Slider
                aria-label="Always visible"
                defaultValue={1000000}
                getAriaValueText={(value) => valuetext(value, onChange)}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                min={100000}
                max={4000000}
            />
        </Box>
    );
}


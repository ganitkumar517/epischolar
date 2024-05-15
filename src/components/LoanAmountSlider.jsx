import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 100,
        label: '100%',
    },
];

function valuetext(value, onChange) {
    onChange(value)
    return `${value}%`;
}

export default function LoanAmountSlider({ value, onChange }) {
    return (
        <Box sx={{ width: '100%' }}>
            <label>Loan Amount (%)</label>
            <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={(value) => valuetext(value, onChange)}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    );
}

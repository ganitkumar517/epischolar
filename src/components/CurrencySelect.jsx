import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CurrencySelect({ value, onChange }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        onChange(event.target.value);

    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Currency"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>USD</MenuItem>
                    <MenuItem value={20}>INR</MenuItem>
                    <MenuItem value={30}>AUD</MenuItem>
                    <MenuItem value={40}>EUR</MenuItem>
                    <MenuItem value={50}>CAD</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}



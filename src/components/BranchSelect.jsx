import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BranchSelect({ value, onChange }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        onChange(event.target.value);

    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Branch"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Computer Science</MenuItem>
                    <MenuItem value={20}>Electronics Engineering</MenuItem>
                    <MenuItem value={30}>Civil Engineering</MenuItem>
                    <MenuItem value={40}>Mechanical Engineering</MenuItem>
                    <MenuItem value={50}>Electrical Engineering</MenuItem>
                    <MenuItem value={60}>Chemical Engineering</MenuItem>
                    <MenuItem value={70}>Biotechnology</MenuItem>
                    <MenuItem value={80}>Aerospace Engineering</MenuItem>
                    <MenuItem value={90}>Environmental Engineering</MenuItem>
                    <MenuItem value={100}>Industrial Engineering</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}


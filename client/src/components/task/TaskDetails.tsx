import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Stack } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

export default function TaskDetails() {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    const [state, setState] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };
    
    return (
        <Container>
            <Box>

            <Stack direction="column" spacing={2} sx={{p: 1}}>
            <TextField
                id="outlined-helperText"
                label="Task name"
                defaultValue="Task name one"
            />
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="low" control={<Radio />} label="Low" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="high" control={<Radio />} label="High" />
                </RadioGroup>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Due date"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>

            <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="State"
                onChange={handleChange}
                >
                <MenuItem value={"todo"}>To Do</MenuItem>
                <MenuItem value={"inprogress"}>In Progress</MenuItem>
                <MenuItem value={"needsreview"}>Needs Review</MenuItem>
                <MenuItem value={"intesting"}>In Testing</MenuItem>
                <MenuItem value={"complete"}>Complete</MenuItem>
                </Select>
            </FormControl>
            
            <Button variant="outlined" startIcon={<AttachFileIcon />}>
                Attachment
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Divider />
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Username
                </Typography>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </CardContent>
            </Card>

            <TextField
            id="outlined-multiline-static"
            label="Add comment"
            multiline
            rows={4}
            />

            <Button variant="outlined" size="small">
                Comment
            </Button>

            </Stack>
            </Box>
        </Container>
    )
}
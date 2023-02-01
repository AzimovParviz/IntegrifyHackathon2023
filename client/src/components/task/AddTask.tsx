
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import CardContent from '@mui/material/CardContent';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function AddTask() {

    return (

    <Card>
        <CardContent>
        <Stack direction="column" spacing={2} sx={{p: 1}}>
        <TextField id="standard-basic" label="Task name" variant="standard" size="small"/>

        <TextField
          id="standard-multiline-static"
          label="Task description"
          multiline
          rows={4}
          variant="standard"
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Assign to...</InputLabel>
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Assign to"
            >
            <MenuItem >Username 1</MenuItem>
            <MenuItem >Username 2</MenuItem>
            <MenuItem >Username 3</MenuItem>
            </Select>
            </FormControl>
        <Button variant="outlined" size="small">
            Add
        </Button>
        </Stack>
        </CardContent>
    </Card>
    )
}
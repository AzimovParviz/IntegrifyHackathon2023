import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from "@mui/system";


export default function Profile() {
    
    return (
        <Container>
            <Box>

            <Stack direction="column" spacing={2} sx={{p: 1}}>
            <TextField
                id="outlined-helperText"
                label="Name"
                defaultValue="Dragos Tudor"
            />
            <TextField
                id="outlined-helperText"
                label="Role"
                defaultValue="Frontend Dev"
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

            <TextField
            id="outlined-multiline-static"
            label="Bio"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            multiline
            rows={4}
            />

            </Stack>
            </Box>
        </Container>
    )
}
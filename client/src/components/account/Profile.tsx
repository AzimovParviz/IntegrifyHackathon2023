import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';

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
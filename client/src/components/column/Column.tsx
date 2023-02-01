
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Task from '../task/Task';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddTask from '../task/AddTask';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

type Column = {
    column: {
        id: number,
        name: string
    }
}


export default function Column({column}: Column) {
    const [show, setShow] = useState(false);

    return (
        <Box
            sx={{
                p: 1,
                width: "100%",
                height: "100%",
            }}
            >
            <Paper elevation={3}>
            <Stack direction="column" spacing={2} sx={{p: 1, justifyContent: "center", alignItems: "center"}}>
                <Typography variant="h5" gutterBottom>
                    {column.name}
                </Typography>
                <Divider light/>
                <Task/>
                <Task/>
                <Task/>
                <IconButton aria-label="delete" size="large" onClick={() => setShow(prev => !prev)}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
                {show && <AddTask/>}
            </Stack>
            </Paper>
        </Box>
    )
}
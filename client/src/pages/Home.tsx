import Column from "../components/column/Column";
import Box from '@mui/material/Box';
import { Stack } from "@mui/system";

const columns = [
    {
        id: 1,
        name: "To Do"
    },
    {
        id: 2,
        name: "In Progress"
    },
    {
        id: 3,
        name: "Needs Review"
    },
    {
        id: 4,
        name: "In Testing"
    },
    {
        id: 5,
        name: "Complete"
    },
]

export default function Home() {
    return (
        <Box>
            <Stack direction="row" spacing={2} sx={{p: 1}}>
            {columns.map((column) => (
                <Column key={column.id} column={column}/>
            ))}
            </Stack>
        </Box>
    )
}
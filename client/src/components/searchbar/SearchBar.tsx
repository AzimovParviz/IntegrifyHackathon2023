import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';

export default function SearchBar() {
  return (
    <Container>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search task by name..."
            inputProps={{ 'aria-label': 'search task by name...' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
    </Container>
  );
}
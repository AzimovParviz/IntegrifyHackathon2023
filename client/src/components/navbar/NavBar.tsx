import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography
} from "@mui/material/";
import {
  Menu,
} from "@mui/icons-material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
import SearchBar from "../searchbar/SearchBar";
import AccountMenu from "./AccountMenu";

const projectItems = [
  {
    icon: <ContentCopyIcon />,
    name: "Project 1"
  },
  {
    icon: <ContentCopyIcon />,
    name: "Project 2"
  },
  {
    icon: <ContentCopyIcon />,
    name: "Project 3"
  },
  {
    icon: <ContentCopyIcon />,
    name: "Project 4"
  }
];

export default function App() {
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box sx={{width: "200px"}}>
        <Typography sx={{textAlign: "center", padding: "20px"}}>
          PROJECTS
        </Typography>
      <Divider />
      <List>
        {projectItems.map((projectItems, index) => (
          <ListItem  button key={index}>
            <ListItemIcon sx={{opacity: "0.5"}}>
              {projectItems.icon}
            </ListItemIcon>
            <ListItemText primary={projectItems.name} />
          </ListItem>
        ))}
      </List>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
    </Box>
  );

  return (
        <AppBar position="sticky">
          <Box sx={{width: "95%", margin: "0 auto"}}>
          <Toolbar disableGutters>
            <IconButton onClick={toggleSlider}>
                <Menu />
            </IconButton>
            <Divider orientation="vertical" />
            <Box sx={{ flexGrow: 1, flexDirection: "row", textAlign: "center"}}>
              <Typography sx={{opacity: 0.3}} variant="h2">
                看板 
              </Typography>
              </Box>
              <Box sx={{ flexGrow: 0.3}}>
                <SearchBar/>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
              <AccountMenu/>
              </Box>
              <Drawer open={open} anchor="left" onClose={toggleSlider}>
                {sideList()}
              </Drawer>
            </Toolbar>

          </Box>
        </AppBar>
  );
}
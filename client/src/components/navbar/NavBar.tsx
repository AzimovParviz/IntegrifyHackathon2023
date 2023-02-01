import React from "react";
import { useState, useEffect } from "react";
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
  Menu, RemoveCircleOutline,
} from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddIcon from "@mui/icons-material/Add";

import SearchBar from "../searchbar/SearchBar";
import AccountMenu from "./AccountMenu";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { deleteProject, fetchAllprojects } from "../../redux/reducers/projectReducer";
import { CreateProject } from "./CreatePrject";

const projectItemsIcon = [
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
  const dispatch = useAppDispatch();
  const allProject = useAppSelector((state) => state.projectReducer.allProjects);
  const [createProject, setCreateProject] = useState(false);
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    dispatch(fetchAllprojects());
  }, [deleted]);

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
        {allProject && allProject.map((projectItems, index) => (
          <ListItem  button key={index}>
            <ListItemIcon sx={{opacity: "0.5"}}>
              {projectItemsIcon[0].icon}
            </ListItemIcon>
            <ListItemText primary={projectItems.name} />
            <IconButton aria-label="add">
              <RemoveCircleOutline onClick={() => {
                dispatch(deleteProject(projectItems._id.toString()))
                setDeleted(true);
              }}/>
          </IconButton>
          </ListItem>
        ))}
      </List>
      <IconButton aria-label="add">
        <AddIcon onClick={() => {
          setOpen(false)
          setCreateProject(true)
        }}/>
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
            {createProject && <CreateProject setCreateProject={setCreateProject} />}
          </Box>
        </AppBar>
  );
}
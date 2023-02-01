import { Box, Container, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { useState, useEffect } from "react";
import { fetchAllCategories } from "../../redux/reducers/categoryReducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "@mui/material/Button";
import { addProject } from "../../redux/reducers/projectReducer";

export enum projectStatus {
    Active = "active",
    Inactive = "inactive",
    Bugfixing = "bugfixing",
}

export const CreateProject = ({setCreateProject}: {setCreateProject: any}) => {
    const [status, setStatus] = useState<any>(projectStatus.Active);
    const [creatingDate, setCreationDate] = useState<any>();
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categoryReducer.allCategories);
    const [projectCategory, setProjectCategory] = useState<any>("");
    const [name, setName] = useState("");
    
    useEffect(() => {
        dispatch(fetchAllCategories());
    }, []);

    return(
        <Container>
        <Box>

        <Stack direction="column" spacing={2} sx={{p: 1}}>
        <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-helperText"
            label="Prject name"
            value={name}
            defaultValue="Project "
        />
   
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Creating date"
            value={creatingDate}
            onChange={(newValue) => {
                setCreationDate(newValue);
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
            <InputLabel id="demo-simple-select-label">Project State</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="State"
            onChange={(e) => setStatus(e)}
            >
                <MenuItem value={projectStatus.Active}>Active</MenuItem>
                <MenuItem value={projectStatus.Bugfixing}>bugfixing</MenuItem>
                <MenuItem value={projectStatus.Inactive}>inactive</MenuItem>
                
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Project Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={projectCategory}
            label="Category"
            onChange={(e) => setProjectCategory(e.target.value)}
            >
                {categories && categories.map((category) => {
                    return(
                        <MenuItem 
                        key={category.id}
                        value={category._id}>
                            {category.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
        <Divider />
        <Button
        onClick={() => {
            dispatch(addProject({
                project: {
                    name: name, categories: [projectCategory], creatingDate, status,
                }
            }))
            setCreateProject(false);
        }}
        >
            Create
            </Button>
        </Stack>
        </Box>
    </Container>
    )
}
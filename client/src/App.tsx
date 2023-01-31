import { ThemeProvider, createTheme } from "@material-ui/core/ThemeProvider";

import Home from "./pages/Home"

export const App = () => {

    const theme = createTheme({
        palette: {mode: 'dark'}
    })

    return(
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    )
}
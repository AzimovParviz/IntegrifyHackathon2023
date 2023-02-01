import Home from "./pages/Home";
// import NavBar1 from "./components/navbar/NavBar1";
import NavBar from "./components/navbar/NavBar";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseLine from '@mui/material/CssBaseline'

export const App = () => {

	const theme = createTheme({
		palette: {mode: "dark"}
	});

	return(
		<ThemeProvider theme={theme}>
			<CssBaseLine />
			<NavBar/>
			<Home/>
		</ThemeProvider>
	);
};
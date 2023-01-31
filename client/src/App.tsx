import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export const App = () => {

	const theme = createTheme({
		palette: {mode: "dark"}
	});

	return(

		<ThemeProvider theme={theme}>
			<Home/>
		</ThemeProvider>
	);
};
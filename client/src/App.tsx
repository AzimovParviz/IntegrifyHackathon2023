import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
	const theme = createTheme({
		palette: {mode: "dark"}
	});

	return(

		<ThemeProvider theme={theme}>
			<Home/>
		</ThemeProvider>
	);
};

export default App;
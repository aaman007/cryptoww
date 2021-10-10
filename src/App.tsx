import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import GlobalStyles from "./utils/globalStyles";
import Routes from "./routes";

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;

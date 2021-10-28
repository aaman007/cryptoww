import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import GlobalStyles from "./utils/globalStyles";
import Routes from "./routes";
import { Provider } from 'react-redux';

import store from './redux/store/index'

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Routes />
				</ThemeProvider>
			</Provider>
		</React.Fragment>
	);
}

export default App;

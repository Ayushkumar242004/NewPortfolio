import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TerminalContextProvider } from "react-terminal";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<TerminalContextProvider>
				<App />
			</TerminalContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

import React, { useEffect, useRef } from "react";
import { ReactTerminal } from "react-terminal";

const TerminalComponent = () => {
	const terminalRef = useRef(null);

	const commands = {
		echo: (args) => args.join(" "),
		help: () => "Available commands: echo, help, clear",
		clear: () => "Terminal cleared",
	};

	useEffect(() => {
		// Focus the terminal when the component mounts
		if (terminalRef.current) {
			terminalRef.current.focusTerminal();
		}
	}, []);

	return (
		<div className="text-white rounded-lg shadow-lg max-w-full h-full overflow-hidden">
			<ReactTerminal
				ref={terminalRef}
				commands={commands}
				prompt="user@react:~$"
				theme="my-custom-theme"
				welcomeMessage="Welcome to the React Terminal! Type 'help' for available commands."
				errorMessage="Command not found. Type 'help' for available commands."
				
                themes={{
					"my-custom-theme": {
						themeBGColor: "#1e1e1f",
						themeToolbarColor: "#2f2f30",
						themeColor: "#ffffff",
						themePromptColor: "#ffdb70",
					},
				}}
			/>
		</div>
	);
};

export default TerminalComponent;

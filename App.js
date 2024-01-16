import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Navigation />
			</AuthProvider>
		</NavigationContainer>
	);
}

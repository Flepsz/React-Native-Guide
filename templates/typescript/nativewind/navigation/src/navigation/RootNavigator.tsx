import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import "../../globals.css"

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name="Main" component={TabNavigator} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
}

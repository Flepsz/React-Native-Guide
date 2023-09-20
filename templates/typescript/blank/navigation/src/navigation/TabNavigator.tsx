import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import TestScreen from "../screens/TestScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  )
}
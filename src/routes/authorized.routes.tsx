import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Home } from "../screens/authorizedScreens";
const Stack = createNativeStackNavigator();

function authorizedRoutes() {
  return (
    <></>
    // <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName="Home"
    // >
    //   <Stack.Screen name="Home" component={Home} />
    // </Stack.Navigator>
  );
}
export default authorizedRoutes;

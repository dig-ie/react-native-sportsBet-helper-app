import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Login, Register } from "../screens/unauthorizedScreens";
const Stack = createNativeStackNavigator();

function UnauthorizedRoutes() {
  return (
    <></>
    // <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName="Login"
    // >
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Register" component={Register} />
    // </Stack.Navigator>
  );
}
export default UnauthorizedRoutes;

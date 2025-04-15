import { NavigationContainer } from "@react-navigation/native";
// import { useAppStorage } from "../stores";
import UnauthorizedRoutes from "./unauthorized.routes";
import AuthorizedRoutes from "./authorized.routes";
function AppRoutes() {
  // const { data } = useAppStorage();
  const data = {
    user_token: null,
  };
  return (
    <NavigationContainer>
      {data?.user_token ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
    </NavigationContainer>
  );
}
export default AppRoutes;

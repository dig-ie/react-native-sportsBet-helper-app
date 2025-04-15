import { NavigationContainer } from "@react-navigation/native";
import UnauthorizedRoutes from "./unauthorized.routes";
import AuthorizedRoutes from "./authorized.routes";
import { useAppStorage } from "@/stores";
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

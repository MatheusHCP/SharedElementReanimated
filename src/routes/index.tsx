import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Data } from "../data/data";


export type RootStackParamList = {
  Home: undefined;
  Detail: {item: Data}
}

export function Routes(){

  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
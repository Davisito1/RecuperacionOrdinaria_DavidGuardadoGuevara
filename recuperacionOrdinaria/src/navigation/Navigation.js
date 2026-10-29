import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Datos from "../screens/Datos"


const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerStyle: { backgroundColor: "#469de5" }, headerTintColor: "#fff" }}
            >
                <Stack.Screen name="Home" component={Home} options={{ title: "Home"}}/>
                <Stack.Screen name="Datos" component={Datos} options={{ title: "Datos"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
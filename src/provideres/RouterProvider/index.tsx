import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import SideMenuProvider from '../SideMenuProvider';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { Menu } from '@componentes/icons';
import CidadesPage from '@pages/cidades';

const Stack = createNativeStackNavigator();

const RouterProvider = () => {
    const theme: any = useTheme();


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: `${theme.primaryColor}`,
                    headerBackTitle: 'Voltar',
                    headerTitleAlign: 'center',
                }}
                initialRouteName={'CidadesPage'} >
                <Stack.Screen
                    name="CidadesPage"
                    component={CidadesPage}
                    options={{ title: 'Cidades' }}
                />
                <Stack.Screen
                    name="Home"
                    component={SideMenuProvider}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterProvider;
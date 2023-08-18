import { Home } from '@componentes/icons';
import { useCidade } from '@hooks/useCidade';
import UnidadesGestoras from '@pages/unidadesGestoras';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { BottonHome } from './styled';
import Representacao from '@pages/representacao';
import Legislacao from '@pages/legislacao';

const Drawer = createDrawerNavigator();

const SideMenuProvider = () => {

    const { cidade } = useCidade();

    const openSideMenu = (navigation: any) => {
        return (
            <BottonHome onPress={() => navigation.navigate('CidadesPage')}>
                {/* @ts-ignore */}
                <Home />
            </BottonHome>
        )
    };

    return (
        <Drawer.Navigator screenOptions={{
            headerRight: () => openSideMenu(useNavigation())
        }}>
            <Drawer.Screen
                name="UnidadesGestoras"
                options={{
                    drawerLabel: "Unidades gestoras",
                    title: cidade?.municipio,
                    headerTitleAlign: 'center'
                }}
                component={UnidadesGestoras} />

            <Drawer.Screen
                name="Representacao"
                options={{
                    drawerLabel: "Representações",
                    title: cidade?.municipio,
                    headerTitleAlign: 'center'
                }}
                component={Representacao} />

            <Drawer.Screen
                name="Legislacao"
                options={{
                    drawerLabel: "Legislações",
                    title: cidade?.municipio,
                    headerTitleAlign: 'center'
                }}
                component={Legislacao} />
        </Drawer.Navigator>
    )
}

export default SideMenuProvider;
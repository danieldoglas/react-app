import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react'
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';
import PaymentMethodsPage from '../pages/PaymentMethodsPage';
import AddPaymentMethodPage from '../pages/AddPaymentMethodPage';
import { View } from 'react-native-web';

const defaultSubRouteOptions = {
    cardStyle: {
        height: '100%',
    },
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const ModalStackNavigator = createStackNavigator();
export default function ModalStackNav() {
  return (<View>
    <ModalStackNavigator.Navigator screenOptions={defaultSubRouteOptions}>
            <ModalStackNavigator.Screen name="La" component={SettingsPage} />
            <ModalStackNavigator.Screen name="Profile" component={ProfilePage} />
            <ModalStackNavigator.Screen name="Wallet" component={WalletPage} />
            <ModalStackNavigator.Screen name="About" component={AboutPage} />
            <ModalStackNavigator.Screen name="PaymentMethods" component={PaymentMethodsPage} />
            <ModalStackNavigator.Screen name="AddPaymentMethod" component={AddPaymentMethodPage} />
    </ModalStackNavigator.Navigator>
    </View>);
}
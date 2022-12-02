import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react'
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';
import PaymentMethodsPage from '../pages/PaymentMethodsPage';
import AddPaymentMethodPage from '../pages/AddPaymentMethodPage';

const defaultSubRouteOptions = {
    cardStyle: {
        height: '100%',
    },
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const ModalStackNavigator = createStackNavigator();
export default function ModalStackNav() {
  return (<ModalStackNavigator.Navigator screenOptions={defaultSubRouteOptions}>
    </ModalStackNavigator.Navigator>
    );
}
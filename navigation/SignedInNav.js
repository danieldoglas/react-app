import React from 'react'
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';
import PaymentMethodsPage from '../pages/PaymentMethodsPage';
import AddPaymentMethodPage from '../pages/AddPaymentMethodPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { View } from 'react-native-web';
import ModalStackNav from './ModalStackNav';


const StackMainView = createNativeStackNavigator();
export default function SignedInNav() {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={{height: '100%', width: '100%'}}>
        <StackMainView.Navigator screenOptions={({ route, navigation })=> ({headerShown: false})}>
          <StackMainView.Group>
              <StackMainView.Screen name="Home" component={HomePage} />
              <StackMainView.Screen name="Search" component={SearchPage} />
          </StackMainView.Group>
          <StackMainView.Group>
          <StackMainView.Screen name="Settings" component={SettingsPage} options={{ presentation: 'transparentModal' }} />
            <StackMainView.Screen name="Profile" component={ProfilePage}  options={{ presentation: 'transparentModal' }} />
            <StackMainView.Screen name="Wallet" component={WalletPage} options={{ presentation: 'transparentModal' }} />
            <StackMainView.Screen name="About" component={AboutPage}  options={{ presentation: 'transparentModal' }}/>
            <StackMainView.Screen name="PaymentMethods" component={PaymentMethodsPage} options={{ presentation: 'transparentModal' }} />
            <StackMainView.Screen name="AddPaymentMethod" component={AddPaymentMethodPage} options={{ presentation: 'transparentModal' }} />
            </StackMainView.Group>
      </StackMainView.Navigator>
      </View>
    </View>
  )
}
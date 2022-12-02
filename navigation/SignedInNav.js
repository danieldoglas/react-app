import React from 'react'
import { Dimensions } from 'react-native';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';
import PaymentMethodsPage from '../pages/PaymentMethodsPage';
import AddPaymentMethodPage from '../pages/AddPaymentMethodPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const initialDimensions = Dimensions.get('window');
const isSmallScreenWidth = initialDimensions.width <= 800;
const modalMode = isSmallScreenWidth ? 'card' : 'transparentModal';


const StackMainView = createNativeStackNavigator();
export default function SignedInNav() {
  return (
        <StackMainView.Navigator screenOptions={({ route, navigation })=> ({headerShown: false})}>
          <StackMainView.Group>
              <StackMainView.Screen name="Home" component={HomePage} />
              <StackMainView.Screen name="Search" component={SearchPage} />
          </StackMainView.Group>

          <StackMainView.Group>
            {/* We still need to fix this so all pages navigated here will be inserted in the same div instead of opening N */}
            <StackMainView.Screen name="Settings" component={SettingsPage} options={{ presentation: modalMode }} />
            <StackMainView.Screen name="Profile" component={ProfilePage}  options={{ presentation: modalMode }} />
            <StackMainView.Screen name="Wallet" component={WalletPage} options={{ presentation: modalMode }} />
            <StackMainView.Screen name="About" component={AboutPage}  options={{ presentation: modalMode }}/>
            <StackMainView.Screen name="PaymentMethods" component={PaymentMethodsPage} options={{ presentation: modalMode }} />
            <StackMainView.Screen name="AddPaymentMethod" component={AddPaymentMethodPage} options={{ presentation: modalMode }} />
            </StackMainView.Group>
      </StackMainView.Navigator>
  )
}
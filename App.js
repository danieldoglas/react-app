
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Expensify from './Expensify';
import HomePage from './pages/HomePage';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Expensify/>
  );
}


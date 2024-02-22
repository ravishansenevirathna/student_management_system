import Register from './pages/StudentMS/Register/Register'
import StudentLogin from './pages/StudentMS/Login/StudentLogin'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './pages/component/DrawerNav/DrawerNav';
import UpdateStudent from './pages/StudentMS/MainPage/UpdateStudent';
import DeleteStudent from './pages/StudentMS/MainPage/DeleteStudent';


const Stack = createStackNavigator();


export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={StudentLogin} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Update" component={UpdateStudent} />
        <Stack.Screen name="Delete" component={DeleteStudent} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
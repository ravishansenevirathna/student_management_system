import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentAction from '../../StudentMS/Action/StudentAction';
import MainPage from '../../StudentMS/MainPage/MainPage';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
   
        <Drawer.Navigator>
            <Drawer.Screen name="Student View" component={MainPage} />
            <Drawer.Screen name="Student Action" component={StudentAction} />
        </Drawer.Navigator>
     
  )
  }
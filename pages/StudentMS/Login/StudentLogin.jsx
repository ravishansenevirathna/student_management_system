import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../AxiosOrder/AxiosOrder';

export default function StudentLogin({ navigation }) {

    const [mail, setMail] = React.useState("batman@gmail.com");
    const [password, setPassword] = React.useState("batman");

    const signIn = async () => {
        const response = await instance.post('/login', { email: mail, password: password });
        const data = response.data;
        const result = await AsyncStorage.setItem('stmToken', data.token)
        const token = await AsyncStorage.getItem('stmToken')
        navigation.navigate('DrawerNav')
        // .then(function (response) {
        //     AsyncStorage.setItem('stmToken', response.data.token)
        //     // navigation.navigate('DrawerNav')
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

    }

    const register = () => {
        navigation.navigate('Register')

    }



    return (
        <View>
            <Text style={styles.regi} variant="headlineMedium">Let's Go</Text>

            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your Email Address"
                value={mail}
                onChangeText={mail => setMail(mail)}
            />
            <TextInput
                style={styles.txt}
                mode="outlined"
                secureTextEntry
                label="Enter Your Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={signIn}>
                SignIn
            </Button>

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={register}>
                Register
            </Button>



        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        margin: 15

        // padding: 8,
        // height: 80,
        // width: 80,
        // alignItems: 'center',
        // justifyContent: 'center',


    },
    btn1: {
        buttonColor: "green",
        margin: 10,



    },
    regi: {
        height: 40,
        justifyContent: 'center',

    }

}); 
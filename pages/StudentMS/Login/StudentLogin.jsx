import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../AxiosOrder/AxiosOrder';

export default function StudentLogin() {

    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = () => {
        instance.post('/login', {
            email: mail,
            password: password
        })
            .then(function (response) {

                AsyncStorage.setItem('stmToken', response.data.token);
                console.log(response.data);
                console.log("success");
            })
            .catch(function (error) {
                console.log(error);
            });

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
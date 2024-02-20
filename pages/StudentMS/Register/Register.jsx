import { Alert, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { Text } from 'react-native-paper';
import instance from '../AxiosOrder/AxiosOrder';
import {
   
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';


export default function Register({navigation}){
    const [name, setName] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");

    

    const register = () => {
        if(name.length==0 || mail.length==0 || password.length==0){
            Alert.alert("Warning!","Please fill your data")
        }
        else{
            
            instance.post('/register', {
                name: name,
                email: mail,
                password:password
    
            })
            .then(function (response) {
                console.log(response.data);
                console.log("registered");
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }
    

    const back = () => {
        console.log("back");
        navigation.navigate('Login')
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
            <Text style={styles.regi} variant="headlineMedium">Register Here!</Text>
            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your Name"
                value={name}
                onChangeText={name => setName(name)}
            />
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
                label="Create New Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={register}>
                Register
            </Button>

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={back}>
                Back
            </Button>

        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    txt:{
        margin:15
   
        // padding: 8,
        // height: 80,
        // width: 80,
        // alignItems: 'center',
        // justifyContent: 'center',
    

    },
    btn1: {
        buttonColor:"green",
        margin:10,
      
        
        
    },
    regi:{
        height:40,
        justifyContent: 'center',
        marginBottom:'10%',
        marginTop:'10%',
        color:'blue',
       
        


    },
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },

  }); 
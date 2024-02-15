import { View } from "react-native";
import { TextInput } from 'react-native-paper';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import instance from '../AxiosOrder/AxiosOrder';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function StudentAction() {

    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState("");
    const [contact, setContact] = React.useState("");

    const saveStudent = () => {
        console.log("Token " + AsyncStorage.getItem("stmToken"));

        instance.post('/student/save', {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
                console.log("saved!");
                console.log(response.data);
                
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const clear = () => {
        console.log("cleard");
    }
  


    return(
        <View>
            <Text style={styles.regi} variant="headlineMedium">Action View!</Text>

            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Name"
                value={name}
                onChangeText={name => setName(name)}
            />
             <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Address"
                value={address}
                onChangeText={address => setAddress(address)}
            />
             <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Age"
                value={age}
                onChangeText={age => setAge(age)}
            />
             <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Contact"
                value={contact}
                onChangeText={contact => setContact(contact)}
            />

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={saveStudent}>
                Save
            </Button>

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={clear}>
                Clear
            </Button>
        </View>

    )
}

const styles = StyleSheet.create({
    txt: {
        margin: 15
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
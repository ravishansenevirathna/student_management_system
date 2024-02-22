import { View } from "react-native";
import { TextInput } from 'react-native-paper';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import instance from '../AxiosOrder/AxiosOrder';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native'



export default function StudentAction() {

    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState("");
    const [contact, setContact] = React.useState("");

    // const saveStudent = () => {
    //     console.log("Token " + AsyncStorage.getItem("stmToken"));
    //     if(age >100 || name.length==0 || address.length==0 || contact<11){
    //         Alert.alert("Warning!","Please enter valid Detail.")
    //     }
    //     else{

    //         instance.post('/student/save', {
            
    //         student_name: name,
    //         student_age: age,
    //         student_address: address,
    //         student_contact: contact
    //     })
    //         .then(function (response) {
    //             console.log("saved!");
    //             console.log(response.data);
                
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     }

    // }

    const saveStudent = () => {
       
      
        // Validate data and create error messages if necessary
        let errorMessages = [];
      
        if (age > 100) {
          errorMessages.push("Enter your Age Correctly.");
        }
      
        if (name.length === 0) {
          errorMessages.push("Please Enter Your Name.");
        }
      
        if (address.length === 0) {
          errorMessages.push("Please Enter your Address.");
        }
      
        if (contact.length !== 10) {
          errorMessages.push("Invalid Contact Number");
        }
      
        // Check if errors exist and display an alert with specific messages
        if (errorMessages.length > 0) {
          const errorMessage = errorMessages.join("\n"); // Combine error messages for readability
          Alert.alert("Warning!", errorMessage);
          return; // Prevent API call if there are errors
        }
      
        // If validation passes, proceed with the API call
        instance.post('/student/save', {
          student_name: name,
          student_age: age,
          student_address: address,
          student_contact: contact
        })
        .then((response) => {
          console.log("saved!");
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error saving student:", error);
          Alert.alert("Error:", "An error occurred while saving the student.");
        });
      };

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
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";
import instance from "../AxiosOrder/AxiosOrder";





export default function UpdateStudent({ route },{navigation}){

    const { selectedStudent } = route.params;
    const studentId = selectedStudent.id;

    const [name, setName] = useState(selectedStudent?.student_name || "");
    const [age, setAge] = useState(selectedStudent?.student_age || "");
    const [address, setAddress] = useState(selectedStudent?.student_address || "");
    const [contact, setContact] = useState(selectedStudent?.student_contact || "");

    useEffect(() => {
       
        if (selectedStudent) {
          setName(selectedStudent.student_name);
          setAge( selectedStudent.student_age.toString());
          setAddress(selectedStudent.student_address);
          setContact(selectedStudent.student_contact);
        }
      }, [selectedStudent]);

    const updateStudent = () => {
    instance.put(`/student/update/${studentId}`, {
        student_name: name,
        student_age: age,
        student_address: address,
        student_contact: contact
    })
        .then(function (response) {
            console.log(response.data);
            console.log("updated!");
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    const back = () => {
        navigation.navigate('DrawerNav');


        // instance.get('/student/getAll')
        //     .then(function (response) {
        //         setData(response.data)
        //         console.log("data "+response.data)
        //         setLoading(false);
        //         navigation.navigate('DrawerNav');
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         setLoading(true);
        //     })
    }

    return(
        <View>
            <Text style={styles.regi} variant="headlineMedium">Update Here!</Text>
            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your New Name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your New Address"
                value={address}
                onChangeText={address => setAddress(address)}
            />
            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your New Age"
                value={age}
                onChangeText={age => setAge(age.toString())}
            />
            <TextInput
                style={styles.txt}
                mode="outlined"
                label="Enter Your New Contact"
                value={contact}
                onChangeText={contact => setContact(contact)}
            />
            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={updateStudent}>
                Update
            </Button>

            <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={back}>
                Back
            </Button>




        </View>
    )
}

const styles = StyleSheet.create({

    btn1: {
        buttonColor:"green",
        margin:10,
      
        
        
    },
  
  }); 
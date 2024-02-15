import { View } from "react-native";
import { Text } from "react-native-paper";
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function UpdateStudent(){

    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState("");
    const [contact, setContact] = React.useState("");

    const updateStudent = () => {
    instance.put(`/student/update/${updateData.id}`, {
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
                onChangeText={age => setAge(age)}
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


        </View>
    )
}

const styles = StyleSheet.create({

    btn1: {
        buttonColor:"green",
        margin:10,
      
        
        
    },
  
  }); 
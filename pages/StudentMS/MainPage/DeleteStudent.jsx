import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import instance from "../AxiosOrder/AxiosOrder";
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native'


export default function DeleteStudent({ route }) {

    const { selectedStudent } = route.params;
    const studentId = selectedStudent.id;

    
    const deleteStudent = () => {
        Alert.alert("Warning!", 'Are you sure?');
        instance.delete(`/student/delete/${studentId}`,{
        })
            .then(function (response) {
                console.log(response.data);
                console.log("Deleted!");
                
            })
            .catch(function (error) {
                console.log(error);
            });
    
        }


  return (
   <View>
    <Text>Delete</Text>
    <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={deleteStudent}>
                Delete
            </Button>
    
   


   </View>
  )
}

const styles = StyleSheet.create({

    btn1: {
        
        margin:80,
        padding:10,
        justifyContent:'center',
      
    },
  
  }); 

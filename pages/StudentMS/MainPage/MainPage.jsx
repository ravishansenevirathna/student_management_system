import { View, FlatList, ActivityIndicator } from 'react-native'
import instance from '../AxiosOrder/AxiosOrder';
import {
    Text,
    Card
} from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar,IconButton } from 'react-native-paper';


export default function MainPage({navigation}) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getalldata();

    }, []);

    const getalldata = () => {
        // console.log("Token " + AsyncStorage.getItem("stmToken"));
        instance.get('/student/getAll')
            .then(function (response) {
                setData(response.data)
                console.log("data "+response.data)
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(true);
            })
    }

    const updateStudent = () => {
        navigation.navigate('Update')
        console.log("Updated");
    }

    const deleteStudent = () => {
        console.log("Delete");
    }

    
    const logOutStudent = () => {
        console.log("logOut Sucessfully");
    }


    const MyCard = ({ id, student_name, student_age, student_address, student_contact }) => (
        <Card style={{ margin: 10 }}>
            <Card.Title
                title={id + '. ' + student_name}
                subtitle="Your details are here! "
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
            />
            <Card.Cover source={{ uri: 'https://logowik.com/content/uploads/images/student5651.jpg' }} />
            <Card.Content>
            
                

                <View>

                    {/* <Text variant="titleLarge">{id + '. ' + student_name}</Text> */}
                    <Text variant="titleLarge">{student_name + ' your age is : ' + student_age} </Text>
                    <Text variant="titleLarge">{student_name + ' your address is : ' + student_address}</Text>
                    <Text variant="titleLarge">{student_name + ' your contact is : ' + student_contact}</Text>

                    <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={updateStudent}>
                        Update
                    </Button>

                    <Button buttonColor="black" style={styles.btn1} mode="contained" onPress={deleteStudent}>
                        Delete
                    </Button>

                </View>
            </Card.Content>
            
        </Card>

    )

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (<View>
                <Text variant="titleLarge">Welcome!  <Button buttonColor="red" style={styles.btnlogout} mode="contained" onPress={logOutStudent}>
                        LogOut
                    </Button></Text>
                <Text variant="headlineLarge">Student Management System</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <MyCard id={item.id} student_name={item.student_name} student_age={item.student_age} student_address={item.student_address} student_contact={item.student_contact} />}
                    keyExtractor={item => item.id}
                />
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    btn1: {
        buttonColor: "green",
        margin: 10,
    },
    btnlogout:{
        borderRadius: 10, 
        justifyContent:'left',
        width:'200',
        height:'20'



        
    
     
    }

});



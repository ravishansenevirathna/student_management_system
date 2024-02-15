import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import lankaNIC from 'lanka-nic';
import { StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import dateFormat, { masks } from "dateformat";

export default function Nic() {
    const [text, setText] = React.useState('');
    const [dateOfBirth, setDateOfBirth] = React.useState('');
    const [gender, setGender] = React.useState('');

    const generator = () => {

        if(dateOfBirth.length==12){
            dateOfBirth.slice(2);
            console.log(dateOfBirth);
            let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(text);
        }
        else if(dateOfBirth.length==10){
            let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(text);
        }

       
       
        
        
        // let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(text);

        
        dateOfBirth = dateFormat(dateOfBirth, "fullDate");
        console.log("pressed");
        setDateOfBirth(dateOfBirth + '');
        setGender(gender + '');


    };



    return (
        <View>
            <Card.Title
                title="NIC_Calculater"

                style={styles.btn1}
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
            />
            <Chip icon="information" onPress={() => console.log('Pressed')}>Calculate your</Chip>

            <TextInput
                mode="outlined"
                label="Enter your NIC"
                placeholder=""
                value={text}
                onChangeText={setText}
                right={<TextInput.Affix text="/100" />}
            />

            <Button style={styles.btn2} icon="camera" mode="contained" onPress={generator}>
                Calculate
            </Button>



            <Text variant="displayMedium">NIC: {text}</Text>
            <Text variant="displayMedium">Birthday: {dateOfBirth}</Text>
            <Text variant="displayMedium">Gender: {gender}</Text>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    btn1: {
        margin: 10,


    },
    btn2: {
        margin: 10,
    },



});


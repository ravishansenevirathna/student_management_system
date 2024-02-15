import { View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Avatar,
    Text,
    Card
} from 'react-native-paper';

export default function Axios() {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();

    }, []);


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(function (response) {
                setData(response.data)
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(true);
            })
    }

    const MyCard = ({ id, title, url, thumbnailUrl }) => (
        <Card style={{ margin: 10 }}>
            <Card.Content>
                <View>
                    <Avatar.Image size={70} source={{ uri: thumbnailUrl }} />
                    <Text variant="titleLarge">{id + '. ' + title}</Text>

                </View>
            </Card.Content>
            <Card.Cover source={{ uri: url }} />
        </Card>
    )

    return (
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (<View>
                <Text variant="titleLarge">Title Large</Text>
                <Text variant="headlineLarge">Headline Large</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <MyCard id={item.id} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl} />}
                    keyExtractor={item => item.id}
                />
            </View>)}
        </View>
    )
}

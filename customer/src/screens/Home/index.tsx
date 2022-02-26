import React from 'react'

import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { merchant } from '../../models'
import Axios from 'axios'

import { StackScreenProps } from '@react-navigation/stack';

type Params = {
    Merchant: {
        id: number
    }
}
export default ({ navigation }: StackScreenProps<Params>) => {
    const [ data, setData ] = React.useState<merchant[]>([])

    React.useEffect(() => {
        Axios.get('https://travelling-merchant-app.herokuapp.com/v1/api/merchants')
        .then((res: any) => {
            setData(res.data)
        })
    }, [])


    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    longitude: 107.608238,
                    latitude: -6.914864,
                    longitudeDelta: 0.02,
                    latitudeDelta: 0.02
            }}>
                {
                    data.map((merchant) => {
                        return(
                            <Marker
                                key={merchant.merchant_id.toString()}
                                coordinate={{
                                    latitude: Number(merchant.coordinate.latitude),
                                    longitude: Number(merchant.coordinate.longitude)
                                }}
                                title={merchant.name}
                                description={merchant.description}
                            >
                                <Callout onPress={() => {
                                    navigation.navigate('Merchant', { id: merchant.merchant_id })
                                }}/>
                            </Marker>
                        )
                    })
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

import React from 'react'

import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { merchant } from '../../models'

export default function App() {
    const [ data, setData ] = React.useState<merchant[]>([])

    React.useEffect(() => {
        setData([
            {
                merchant_id: 1,
                name: "Pak Sutomo",
                description: "Ketoprak",
                coordinate: {
                    longitude: -0.0877321,
                    latitude: 51.5078788,
                }
            },
            {
                merchant_id: 2,
                name: "Pak Bowo",
                description: "Sol Sepatu",
                coordinate: {
                    latitude: 37.78825,
                    longitude: -122.4324
                }
            },
            {
                merchant_id: 3,
                name: "Pak Jack",
                description: "Ketoprak",
                coordinate: {
                    longitude: 107.608238,
                    latitude: -6.914864,
                }
            }
        ])
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
                                key={merchant.merchant_id}
                                coordinate={{
                                    latitude: merchant.coordinate.latitude,
                                    longitude: merchant.coordinate.longitude
                                }}
                                title={merchant.name}
                                description={merchant.description}
                            />
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

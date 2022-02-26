import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Axios from 'axios';

export default function App() {
    const [titleText, setTitleText] = useState("Pak Budi");
    const [flag, setFlag] = useState(true);
    const [loc, setLoc] = useState([0, 0])
    const [data, setData] = useState("")
    const bodyText = "Tukang Bakso";

    const onPressTitle = () => {
        if (flag) {
            setTitleText("Pak Budi : id = 321231");
            setFlag(false);

        } else {
            setTitleText("Pak Budi");
            setFlag(true);
        }
    };

    React.useEffect(() => {
        // Get position Data 
        const pos = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setLoc([position.coords.latitude, position.coords.longitude])
        })
      }
        pos();
        Axios.post('https://travelling-merchant-app.herokuapp.com/v1/api/coordinate', {
            "merchant_id" : 2,
            "coordinate" : {
                "latitude" : 23123,
                "longitude" : -123232,
            },
        }).then((response) => {
          console.log(response);
        });// Mengirim data ke server
//
        //Axios.get('https://travelling-merchant-app.herokuapp.com/v1/api/merchants/2').then((data: any) => {
        //    console.log(data.data);
        //    setTitleText(data.data.name)
        //}) // Dapat data dari backend

    }, [])    
    return (
        <Text >
          <Text onPress={onPressTitle}>
            {titleText}
            {"\n"}
          </Text>
          <Text>{bodyText}</Text>
        </Text>
      );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

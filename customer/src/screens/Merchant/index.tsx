import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Axios from 'axios'
import {} from '../Home'


export default function App() {

  const[name, setName] = React.useState();
  const[desc, setDesc] = React.useState();
  const[phone, setPhone] = React.useState()
  
  React.useEffect(() => {
    // Line 15, tinggal diganti dengan "../merchants/${id}"
    Axios.get('https://travelling-merchant-app.herokuapp.com/v1/api/merchants/11')
    .then((res:any) => {
      
      setName(res.data.name);
      setPhone(res.data.phone);
      setDesc(res.data.description)

    })
    
  })
  
    return (
      <View style={styles.container}>

        <Text>{name}</Text>
        <Text>{desc}</Text>
        <Text>{phone}</Text>
        <Text>{}</Text>

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
});

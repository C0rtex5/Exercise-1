// Importing my stuff below:

import { View, Text, StyleSheet, Image } from 'react-native' 
import Slider from '@react-native-community/slider'

// Exporting my stuff below:

export default function App(){
  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      sytyles={styles.logo}
      />

      <Text style={styles.title}>20 characters</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 50 }}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='392de9'>
          </Slider>
      </View>

    </View>
  )
}

// Styling my stuff below:

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  }
})
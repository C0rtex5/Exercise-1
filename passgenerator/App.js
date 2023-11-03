// Importing my stuff below:

import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native' 
import Slider from '@react-native-community/slider'
import {ModalPassword} from './src/components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQTERSTUVWXYZ0123456789"

// Exporting my stuff below:

export default function App(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState ("")
  const [modalVisible, setModalVisible] = useState (false);

  function generatePassword(){
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++){
        password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);

  }

  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} characters</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 50 }}
        minimumValue={10}
        maximumValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0)) }
        >
          </Slider>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>
          Generate Password
        </Text>

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}>
          </ModalPassword>
        </Modal>

      </TouchableOpacity>

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
  logo:{
    marginBottom: 60,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  }
})
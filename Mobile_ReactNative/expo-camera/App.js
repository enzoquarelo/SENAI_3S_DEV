import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityBase } from 'react-native';

import { Camera, CameraType } from 'expo-camera'

import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  const cameraRef = useRef(null)
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back)

  async function CapturePhoto(){
    if( cameraRef ){
      const photo = await cameraRef.current.takePictureAsync();

      console.log( photo )
    }
  }

  useEffect(() => {
    ( async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>
      <Camera 
        ref={ cameraRef }
        type={tipoCamera}
        style={ styles.camera }  
        
        ratio={'16:9'}
      >
        <View style={ styles.viewFlip }>
          <TouchableOpacity style={ styles.btnFlip } onPress={ () => setTipoCamera( tipoCamera == CameraType.front ? CameraType.back : CameraType.front )}>
            <Text style={ styles.txtFlip }>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={ styles.btnCaptura } onPress={() => CapturePhoto()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera : {
    flex : 1,
    width : '100%',
    height : '80%'
  },
  viewFlip : {
    flex : 1,
    backgroundColor : 'transparent',
    flexDirection : 'row',
    alignItems : 'flex-end',
    justifyContent : 'center'
  },
  btnFlip : {
    padding : 15
  },
  txtFlip : {
    fontSize : 20,
    color : '#fff',
    marginBottom : 20
  },
  btnCaptura: {
    margin: 20,
    padding: 30,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 4,
    borderColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
   }
});

import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { GlobalContext } from '../../context/context';

export default function Scanner() {
  let {state , dispatch} = useContext(GlobalContext)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    state.allApprovedApplications.map((item,index)=>{
        if(item.approvedObj.uid === data){
            console.log(data)
            alert("Verified" , item.approvedObj.uid === data);
        }else{
            console.log("Not Verified")
        }
    })
    
   
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
});

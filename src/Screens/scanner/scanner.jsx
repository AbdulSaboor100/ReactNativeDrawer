import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { GlobalContext } from '../../context/context';
import { db , getDoc , doc  } from '../../configs/firebase';

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



  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    let verifyRef = doc(db, "approvedApplications" , data);
    let verifyData = await getDoc(verifyRef)
    if(verifyData.data().status === "approved"){
      alert(verifyData.data().status)
    }else{
      alert("rejected")
    }
   
  };

  useEffect(()=>{

  },[])

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

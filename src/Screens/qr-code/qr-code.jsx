import React , {useContext, useEffect, useState} from 'react'
import { View , Text ,StyleSheet} from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { GlobalContext } from '../../context/context';

// function LogoFromFile() {

//   return <SvgQRCode value="Just some string value"  />;
// }



const QrCode = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [codeState , setCodeState] = useState('hello');
    useEffect(()=>{
        setCodeState(state.approvedApplication.approvedObj.uid)
    },[])
    return (
        <View style={styles.container}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <SvgQRCode value={codeState}  />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
    },
  });

export default QrCode


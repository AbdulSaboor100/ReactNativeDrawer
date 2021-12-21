import React from 'react';
import { View , Text ,TouchableOpacity , StyleSheet} from 'react-native';

const BranchManager = ({navigation}) => {
    function verifyFromSN(){
        navigation.navigate('serialNumber')
    }
    function verifyFromQR(){
        navigation.navigate('Scanner')
    }

    return (
        <View style={styles.container}>
            <View style={{marginBottom:40}}>
                <TouchableOpacity  onPress={verifyFromSN}><Text style={{fontSize:18 , backgroundColor:'#89c343' ,color:'white',padding:20 ,fontWeight:'bold'}}>Verify From Serial No</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={verifyFromQR}><Text style={{fontSize:18 , backgroundColor:'#89c343' ,color:'white',padding:20 ,fontWeight:'bold'}}>Verify From Qr Code</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#ffffff" ,
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default BranchManager;
 
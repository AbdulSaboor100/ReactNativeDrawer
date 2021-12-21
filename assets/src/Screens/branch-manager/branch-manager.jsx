import React from 'react';
import { View , Text ,TouchableOpacity , StyleSheet} from 'react-native';

const BranchManager = ({navigation}) => {
    function verifyFromSN(){
        navigation.navigate('serialNumber')
    }
    function verifyFromQR(){}

    return (
        <View style={styles.container}>
            <View style={{marginBottom:40}}>
                <TouchableOpacity onPress={verifyFromSN}><Text>Verify From Serial Number</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={verifyFromQR}><Text>Verify From Qr Code</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default BranchManager;

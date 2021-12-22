import React, { useEffect, useState } from 'react';
import { View  ,Text , TextInput, StyleSheet ,TouchableOpacity, Alert , Button} from 'react-native';
import { db , doc, updateDoc , getDoc } from '../../configs/firebase';

const SerialNumber = () => {
    let [serialInp , setSerialInp]= useState('')
    const [serialNum, setSerialNum] = useState("");

    async function verifyNow(){
        try {
            let verifyRef = doc(db, "approvedApplications" , serialInp);
            let verifyData = await getDoc(verifyRef)
            console.log(verifyData.data().status === "approved")
            if(verifyData != undefined){
                if(verifyData.data().status === "approved"){
                    setSerialNum(verifyData.data().status)
                }
            }else{
                setSerialNum("Rejected")
            }
           
            
        } catch (error) {   
            setSerialNum("Rejected")
            console.log(error , "error")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Serial Number" style={styles.input} value={serialInp} onChangeText={(e)=>{setSerialInp(e)}}  />
            <View>
                <Button color="#89c343"  title='Verify' onPress={verifyNow} />
            </View>

            {
                serialNum ? (
                    <View style={{marginTop:20}}>
                        <Button color="#89c343" title='Click Here To See The Result' onPress={()=>{Alert.alert("message" , serialNum)}}></Button>
                    </View>
                ) : (null)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#dedfe0" ,
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input : {
        width:250,
        height: 60,
        margin: 20,
        borderWidth: 1,
        borderColor : 'rgb(195, 195, 195)',
        padding: 10,
        borderRadius : 5,

    },

})

export default SerialNumber;

import React, { useContext, useEffect } from 'react';
import { View ,Text , ScrollView} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { GlobalContext } from '../../context/context';

const Approved = () => {
    let {state,dispatch} = useContext(GlobalContext)
    useEffect(()=>{
        let date = new Date(state.publicApplications.createdAt.seconds)
        console.log(state.publicApplications.status)
    },[])
    return (
        <ScrollView>
            {
                state.publicApplications.status && state.publicApplications.status != 'rejected' ? (
        <View>
                         <View>
                <Text>Khana Sab Ke Liye</Text>
            </View>
            <View>
                <Text>{state.publicApplications.status}</Text>
            </View>
            <View>
                <Text>Father Name : {state.publicApplications.fatherName}</Text>
            </View>
            <View>
                <Text>Cnic No : {state.publicApplications.cnic}</Text>
            </View>
            <View>
                <Text>Contact No : 92-311-1729526</Text>
            </View>
        </View>
           
           
                ) : (
                    <View style={{flex : 1 , justifyContent:'center' , paddingTop : 200 , alignItems : 'center' ,width:'100%' , height :'100%'}}>
                        <Text>Your Application Don't Approved Right Now</Text>
                    </View>
                )
            }
        </ScrollView>

    )
}

export default Approved;

import React, { useContext, useEffect, useState } from 'react';
import { View ,Text , ScrollView} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { GlobalContext } from '../../context/context';

const Approved = () => {
    let {state,dispatch} = useContext(GlobalContext)
    let [ourData , setOurData] = useState()
    useEffect(()=>{
        // let date = new Date(state.publicApplications.createdAt.seconds)
        setOurData(state.approvedApplication)
    },[])
    return (
        <ScrollView>
            {
                state.approvedApplication ? (
                    <View>
                    <View>
           <Text>Khana Sab Ke Liye</Text>
       </View>
       <View>
           <Text>Your Application Status : {state.approvedApplication.status}</Text>
       </View>
       <View>
           <Text>Father Name : {state.approvedApplication.approvedObj.fatherName}</Text>
       </View>
       <View>
           <Text>Cnic No : {state.approvedApplication.approvedObj.cnic}</Text>
       </View>
       <View>
           <Text>Contact No : 92-311-1729526</Text>
       </View>
       <View>
           <Text>Food Bank Branch Name</Text>
           <Text>{state.approvedApplication.approvedObj.nearestOne.name}</Text>
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
{/* <View style={{flex : 1 , justifyContent:'center' , paddingTop : 200 , alignItems : 'center' ,width:'100%' , height :'100%'}}>
<Text>Your Application Don't Approved Right Now</Text>
</View> */}
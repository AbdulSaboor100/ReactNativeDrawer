import React, {useContext, useState} from 'react';
import {View, Button, Platform , Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GlobalContext } from '../../context/context';
import { Fontisto } from '@expo/vector-icons'; 

export const DatePickerFunc = () => {
  let {state , dispatch} = useContext(GlobalContext)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    dispatch({type : "CURRENTDATEPICKER" , payload : currentDate})
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style={{width:'100%',display:'flex', flexDirection:'row' ,alignItems : 'center' , justifyContent : 'flex-start',borderColor: "rgb(195, 195, 195)" , borderWidth:1, height :40, paddingLeft:5 ,paddingRight:140,paddingTop:5,paddingBottom:5 }}>
        <Fontisto name="date" size={20} color="black" onPress={showDatepicker} />
        <Text style={{fontSize : 15 , marginLeft :10 , color:'#a9abaa'}}>Date Of Birth</Text>
      </View>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
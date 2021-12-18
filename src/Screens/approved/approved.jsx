import React from 'react';
import { View ,Text , ScrollView} from 'react-native';

const Approved = () => {
    return (
        <ScrollView>
            <View>
                <Text>Khana Sab Ke Liye</Text>
            </View>
            <View>
                <Text>Father Name</Text><Text>{}</Text>
            </View>
            <View>
                <Text>Cnic No</Text><Text>{}</Text>
            </View>
            <View>
                <Text>Contact No</Text><Text>{}</Text>
            </View>
            <View>
                <Text>Date of Issue</Text><Text>{}</Text>
            </View>
            <View>
                <Text>Date Of Expiry</Text><Text>{}</Text>
            </View>
        </ScrollView>
    )
}

export default Approved;

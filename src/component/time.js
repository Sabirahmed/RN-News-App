import React from 'react';
import { Text } from 'native-base';
import moment from 'moment';

// create a component
const Time = ({time}) => {
    
    const formatedTime = moment( time || moment.now() ).fromNow();

        return (
            <Text note style={{marginHorizontal:10}}>{formatedTime}</Text>
        );
    
}

//make this component available to the app
export default Time;
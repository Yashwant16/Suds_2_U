import React, {useState} from 'react';
import {Switch, View} from 'react-native';

const TripSwitch = ({headerTitle}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  if (headerTitle == 'WELCOME' || (headerTitle == 'EARNING' || headerTitle == undefined))
    return (
      <Switch
        style={{marginRight: 10}}
        trackColor={{false: '#777', true: '#fa5'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    );
    else return null
};

export default TripSwitch;

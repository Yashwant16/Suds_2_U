import * as React from 'react';
import Colors from '../../Constants/Colors';

export const navigationRef = React.createRef();

export const navigate = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};

export const opedDrawer = () => {
  navigationRef.current?.openDrawer();
};

export const changeStack = stackName => {
  resetRoot(stackName);
};

const resetRoot = routeName => {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name: routeName}],
  });
};

export const defaultScreenOptions = {
  headerStyle: {backgroundColor: Colors.blue_color},
  headerTitleStyle: {color: 'white'},
  headerTitleAlign: 'center',
  headerTintColor: 'white',
};

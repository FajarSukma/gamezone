import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Game Zone' navigation={navigation} />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Detail Game Zone',

        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'cyan', height: 70 }
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;


import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from 'src/screens/Home'
import { screenNames } from 'src/constants/navigation'


const Navigator = createSwitchNavigator(
    {
        [screenNames.HOME]: HomeScreen,
    },
);

export default Navigator;

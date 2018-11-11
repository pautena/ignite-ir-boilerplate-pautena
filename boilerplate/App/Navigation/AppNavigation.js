import LaunchScreen from '../Containers/LaunchScreen'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createSwitchNavigator(
  {
    LaunchScreen: LaunchScreen,
    App: PrimaryNav
  },
  {
    initialRouteName: 'LaunchScreen'
  }
)

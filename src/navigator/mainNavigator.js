import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile171847Navigator from '../features/UserProfile171847/navigator';
import Settings171846Navigator from '../features/Settings171846/navigator';
import Settings171844Navigator from '../features/Settings171844/navigator';
import SignIn2171842Navigator from '../features/SignIn2171842/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile171847: { screen: UserProfile171847Navigator },
Settings171846: { screen: Settings171846Navigator },
Settings171844: { screen: Settings171844Navigator },
SignIn2171842: { screen: SignIn2171842Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

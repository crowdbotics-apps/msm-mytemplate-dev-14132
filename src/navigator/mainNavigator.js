import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen613331Navigator from '../features/BlankScreen613331/navigator';
import Messaging13305Navigator from '../features/Messaging13305/navigator';
import BlankScreen513301Navigator from '../features/BlankScreen513301/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen613331: { screen: BlankScreen613331Navigator },
Messaging13305: { screen: Messaging13305Navigator },
BlankScreen513301: { screen: BlankScreen513301Navigator },

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

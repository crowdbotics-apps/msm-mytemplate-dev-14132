import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView13303Navigator from '../features/CalendarView13303/navigator';
import BlankScreen413302Navigator from '../features/BlankScreen413302/navigator';
import BlankScreen513301Navigator from '../features/BlankScreen513301/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView13303: { screen: CalendarView13303Navigator },
BlankScreen413302: { screen: BlankScreen413302Navigator },
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

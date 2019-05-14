import Home from 'src/screens/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Routes = createAppContainer(createStackNavigator({ Home }));

export default Routes;

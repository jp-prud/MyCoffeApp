import {AuthContextProvider} from '@context';
import {ThemeProvider} from '@shopify/restyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {OrderContextProvider} from './src/context/OrderContext/OrderContext';
import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{flex: 1}}>
          <AuthContextProvider>
            <OrderContextProvider>
              <Router />
            </OrderContextProvider>
          </AuthContextProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

import {AuthContextProvider} from '@context';
import {OrderContextProvider} from '@context';
import {ThemeProvider} from '@shopify/restyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {theme} from '@theme';

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

import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Container} from '@shopify/polaris';
import View from './components/header/View';
import ContentView from './components/content/ContentView';
import Settings from './components/content/Settings';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
        <View />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ContentView} />
            <Route exact path='/settings' component={Settings} />
          </Switch>
        </BrowserRouter>
    </AppProvider>
  );
}

export default App;


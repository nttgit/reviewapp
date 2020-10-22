import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import View from './components/header/View';
import ContentView from './components/content/ContentView';
import Settings from './components/content/Settings';
import Instructions from './components/content/Instructions';
import ReviewsDetail from './components/content/ReviewsDetail';
import ImportReviews from './components/content/ImportReviews';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
        <View />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ContentView} />
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/instructions' component={Instructions} />
            <Route exact path='/reviews-detail' component={ReviewsDetail} />
            <Route exact path='/import-reviews' component={ImportReviews} />
          </Switch>
        </BrowserRouter>
    </AppProvider>
  );
}

export default App;


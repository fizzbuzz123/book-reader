import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@routes';

import SignInDialog from '@components/SignInDialog';
import SignUpDialog from '@components/SignUpDialog';
import NotificationSystem from '@components/NotificationSystem';
import FirestoreIsListenersRequested from '@components/FirestoreIsListenersRequested';
import ConfirmDialog from '@components/ConfirmDialog';
import BookAccessRestrictionDialog from '@components/BookAccessRestrictionDialog';

function App() {
  return (
    <Fragment>
      <FirestoreIsListenersRequested>
        <Switch>
          {routes.map(({ name, ...rest }) => (
            <Route key={name} {...rest} />
          ))}
        </Switch>
        <SignInDialog />
        <SignUpDialog />
        <ConfirmDialog />
        <BookAccessRestrictionDialog />
        <NotificationSystem />
      </FirestoreIsListenersRequested>
    </Fragment>
  );
}

export default App;

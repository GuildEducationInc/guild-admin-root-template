import * as React from 'react';
import { AuthProvider } from '@guildeducationinc/guild-auth';
import { RollbarContext, RollbarProvider } from '../../context/RollbarContext';
import { useHistory } from 'react-router';

// place all of your providers into this component
export const Providers: React.FC = ({ children }) => {
  const { push } = useHistory();
  return (
    <RollbarProvider>
      <RollbarContext.Consumer>
        {({ rollbar }) => (
          <AuthProvider
            domain={process.env.AUTH0_DOMAIN || ''}
            client_id={process.env.AUTH0_CLIENT_ID || ''}
            redirect_uri={window.location.origin}
            errorLogHandler={(message, exception) => {
              rollbar.error(message, exception);
            }}
            historyPushFn={push}
          >
            {children}
          </AuthProvider>
        )}
      </RollbarContext.Consumer>
    </RollbarProvider>
  );
};
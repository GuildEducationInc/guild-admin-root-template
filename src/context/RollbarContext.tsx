import React, { createContext } from 'react';
import Rollbar from 'rollbar';

interface RollbarContextInterface {
  rollbar: Rollbar;
}

const rollbarConfig: Rollbar.Configuration = {
  accessToken: process.env.ROLLBAR_POST_CLIENT_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  code_version: process.env.SOURCE_VERSION,
  enabled: Boolean(process.env.ROLLBAR_ENABLED) || process.env.NODE_ENV === 'prod',
  payload: {
    environment: process.env.ROLLBAR_ENV || process.env.NODE_ENV,
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: process.env.SOURCE_VERSION || null,
        guess_uncaught_frames: true,
      },
    },
  },
};

const rollbar = new Rollbar(rollbarConfig);

const RollbarContextDefaults: RollbarContextInterface = {
  rollbar,
};

export const RollbarContext = createContext<RollbarContextInterface>(RollbarContextDefaults);

export const RollbarProvider: React.FC = props => {
  return <RollbarContext.Provider value={{ rollbar }}>{props.children}</RollbarContext.Provider>;
};
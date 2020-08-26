import * as React from 'react';
import { Redirect as RRDRedirect, RedirectProps } from 'react-router-dom';
import { useBasename } from '../Providers/AdminRouter';

/**
 * The idea of this componet is to support redirect between routes within a subapp.
 */

const Redirect = (props: RedirectProps) => {
  const { from, to, ...rest } = props
  const baseRoute = useBasename();

  const computedFrom = from && from === '/' ? baseRoute : `${baseRoute}${from}`
  const computedTo = to === '/' ? baseRoute : `${baseRoute}${to}`
  return (
    <RRDRedirect
      from={computedFrom}
      to={computedTo}
      {...rest}
    />
  )
}

export default Redirect;
import { 
  Link, 
  LinkProps,
} from 'react-router-dom';
import * as React from 'react';
import { useBasename } from '../Providers/AdminRouter';

const AdminLink = (props: LinkProps) => {
  const baseRoute = useBasename()
  const { 
    to,
    ...rest
  } = props

  const computedRoute = to === '/' ? baseRoute : `${baseRoute}${to}`
  return (
    <Link {...rest} to={computedRoute} />
  )
}

export default AdminLink
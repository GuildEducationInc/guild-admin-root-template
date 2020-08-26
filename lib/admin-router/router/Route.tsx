import { 
  Route,
  RouteProps
} from 'react-router-dom';
import * as React from 'react';
import { useBasename } from '../Providers/AdminRouter';


const AdminRoute = (props: RouteProps) => {
  const baseRoute = useBasename();
  const { 
    path,
    ...rest
  } = props

  const computedRoute = path === '/' ? baseRoute : `${baseRoute}${path}`
  return (
    <Route {...rest} path={computedRoute} />
  )
}

export default AdminRoute
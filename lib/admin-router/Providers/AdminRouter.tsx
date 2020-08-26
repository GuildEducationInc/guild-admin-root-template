import * as React from 'react';
import { getRoute } from '@guildeducationinc/guild-admin-utils';

export const AdminRouterContext = React.createContext<{ App?: React.ComponentType }>({ App: null})

const AdminRouterProvider = AdminRouterContext.Provider

export interface AdminRouterProps {
  App: React.ComponentType
}
export const AdminRouter: React.FC<AdminRouterProps> = ({ App , ...rest}) => {
  return (
    <AdminRouterProvider value={{ App }}>
      { rest.children }
    </AdminRouterProvider>
  )
}

export const useBasename = () => {
  const { App } = React.useContext(AdminRouterContext)
  return getRoute(App)
}
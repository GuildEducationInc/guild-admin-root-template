import * as React from 'react';
import { TabLink, CoBrand, NavBarTabs , Brand, NavBar, UserActions } from "@guildeducationinc/recess/components/Navigation";
import { Link, useLocation } from 'react-router-dom';
import apps from '../apps.js';
import { getLabel, getRoute, getRoles } from '@guildeducationinc/guild-admin-utils';
import Button from '@guildeducationinc/recess/components/Button';
import { useAuth } from '@guildeducationinc/guild-auth';

export const Navigation = () => {
  const auth = useAuth();
  const role = (auth.user || {}).role;
  return (
    <NavBar >
        <Brand href='/'>
      <CoBrand />
    </Brand>
      <NavBarTabs >
        {
          apps.map(App => {
            const label = getLabel(App);
            const route = getRoute(App);
            const allowedRoles = getRoles(App)
            const { pathname } = useLocation();
            const match = !!pathname.match(new RegExp(route))
            return (
              (allowedRoles.length === 0 || allowedRoles.indexOf(role) > -1) ?
                <TabLink current={match} Component={Link} key={label} to={route}>{ label }</TabLink>
                : null
            )
          }
          )
        }
      </NavBarTabs>
      <UserActions
      testid='useractions'
      loggedInTitle='Test User'
      loggedinActions={[
        {
          type: 'customLink',
          name: 'Sign out',
          Component: Button,
          onClick: auth.logout as any,
          appearance: 'outline',
        },
      ]}
      primaryTitle='Sign in'
      hideSecondaryAction
      onPrimaryClick={auth.loginWithRedirect}
      loggedIn={!!auth.user}
    />
    </NavBar>
  )
}
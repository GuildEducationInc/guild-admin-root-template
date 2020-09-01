import * as React from 'react';
import apps from './apps.js';
import {  getRoute } from '@guildeducationinc/guild-admin-utils';
import { useAuthAndLogin } from '@guildeducationinc/guild-auth';
import { ProtectedComponent, } from '@guildeducationinc/guild-auth';
import { Loading } from '@guildeducationinc/recess/components/Loading';
import { getRoles } from '@guildeducationinc/guild-admin-utils';
import { ErrorPage } from '@guildeducationinc/recess/components/ErrorPage';
import { useHistory, Route, Redirect } from 'react-router';

const SubApp = () => {
  const { goBack } = useHistory();
  const { loading, authError, hasAuthError } = useAuthAndLogin();

  if (loading) {
    return (
      <div>
        <Loading showChildrenWhileLoading={true} overlay={true} loaded={loading} />
      </div>
    )
  }
  if (!loading && hasAuthError) {
    return <ErrorPage message={authError} goBack={ goBack }/>;
  }
  return (<>
    <Route exact path='/'>
      <Redirect to={getRoute(apps[0])} />
    </Route>
    {
      apps.map((App, idx) => {
        const roles = getRoles(App)
        if (roles.length === 0) {
          return (
            <Route key={getRoute(App)} path={getRoute(App)}>
              <App key={getRoute(App)} />
            </Route>
          )
          } else {
            return (
              <Route key={getRoute(App)} path={getRoute(App)}>
              <ProtectedComponent key={idx} roles={roles} fallback={<ErrorPage message='Not found' goBack={goBack}/>} loader={<Loading />}>
                <App key={getRoute(App)} />
              </ProtectedComponent>
              </Route>
            )
          }
      })
    }
    </>
  )
}

export default SubApp;

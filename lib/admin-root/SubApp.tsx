import * as React from 'react';
import { getRoute } from '@guildeducationinc/guild-admin-utils';
import { useAuthAndLogin } from '@guildeducationinc/guild-auth';
import { ProtectedComponent, } from '@guildeducationinc/guild-auth';
import { Loading } from '@guildeducationinc/recess/components/Loading';
import { getRoles } from '@guildeducationinc/guild-admin-utils';
import { ErrorPage } from '@guildeducationinc/recess/components/ErrorPage';
import { Switch, Route } from 'react-router';

export interface SubAppRoutesProps {
  apps: Array<any>
}
const SubAppRoutes: React.FC<SubAppRoutesProps> = (props) => {
  const { loading, authError, hasAuthError } = useAuthAndLogin();

  if (loading) {
    return (
      <div>
        <Loading showChildrenWhileLoading={true} overlay={true} loaded={false} />
      </div>
    )
  }
  if (!loading && hasAuthError) {
    return <ErrorPage message={authError} goBack={ () => history.back() }/>;
  }
  return (
    <Switch>
    {
      props.apps.map((App, idx) => {
        const roles = getRoles(App)
        if (roles.length === 0) {
          return (
            <Route path={getRoute(App)}>
              <App key={getRoute(App)} />
            </Route>

          )
          } else {
            return (
              <Route path={getRoute(App)}>
                <ProtectedComponent key={idx} roles={roles} fallback={<ErrorPage message='Not found' goBack={() => history.back()}/>} loader={<Loading />}>
                  <App key={getRoute(App)} />
                </ProtectedComponent>
              </Route>
            )
          }
      })
    }
    </Switch>
  )
}

export default SubAppRoutes;

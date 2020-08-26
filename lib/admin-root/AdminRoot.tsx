import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@guildeducationinc/guild-auth";
import Navigation from "@guildeducationinc/recess/components/Navigation";
import { Switch, Route } from "react-router";
import { Main } from "./layout/Main";
import SubAppRoutes from "./SubApp";
import * as React from "react";

type SubApp = any;
interface AdminRootProps {
  audience: string
  domain: string
  client_id: string
  subApps: SubApp[]
}


export const AdminRoot: React.FC<AdminRootProps> = ({ audience, domain, client_id, subApps }) => {
  return(
    <BrowserRouter>
      <AuthProvider
        audience={audience}
        domain={domain}
        client_id={client_id}
        redirect_uri={window.location.origin}
      >
        <Navigation />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
        <main className='main'>
          <SubAppRoutes apps={subApps} />
          {/* <SubApp /> */}
        </main>
      </AuthProvider>
    </BrowserRouter>
  )
}
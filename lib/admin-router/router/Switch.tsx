import { Switch as RRDSwitch, SwitchProps } from 'react-router-dom';
import * as React from 'react';
import { useBasename } from '../Providers/AdminRouter';


const Switch = (props: SwitchProps) => {
  const baseRoute = useBasename();
  const routes = React.Children.map(props.children, (child: any) => {
    const {
      path
    } = child.props
    const computedPath = path === '/' ? baseRoute : `${baseRoute}${path}`
    return React.cloneElement(child, { ...child.Props, path: computedPath })
  });

  return (
    <RRDSwitch {...props}>
      { routes }
    </RRDSwitch>
  )

}

export default Switch
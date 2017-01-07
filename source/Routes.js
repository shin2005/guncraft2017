import React from 'react';
import Home from 'containers/Tabs/Home';
import Worlds from 'containers/Tabs/Worlds';
import Mobs from 'containers/Tabs/Mobs';
import Commands from 'containers/Tabs/Commands';
import Entity from 'containers/Tabs/Entity';
import References from 'containers/Tabs/References';
import NotFound from 'components/NotFound';
import {Route, IndexRoute} from 'react-router';
import App from 'containers/App';


export const tabs = [
  {
    pathname: '',
    tabLabel: 'Home',
    component: Home
  },
  {
    pathname: 'worlds',
    tabLabel: 'Worlds',
    component: Worlds
  },
  {
    pathname: 'mobs',
    tabLabel: 'Mobs',
    component: Mobs
  },
  {
    pathname: 'commands',
    tabLabel: 'Commands',
    component: Commands
  },
  {
    pathname: 'entity',
    tabLabel: 'Entity & Enchant Ids',
    component: Entity
  },
  {
    pathname: 'references',
    tabLabel: 'References',
    component: References
  }
]

export const routes = (
  <Route
    name="app"
    component={App}
    path="/"
  >
    {tabs.map((tab, index) => {
      if (index === 0) return <IndexRoute key={index} component={tab.component} />
      return <Route key={index} path={`/${tab.pathname}`} component={tab.component} />
    })}
    <Route path='*' component={NotFound} />
  </Route>
)

/** @format */
import BasicLayout from '@layout/BasicLayout';
import routers, { Route as IRoute } from '@routes/router';
import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

function App() {
  const renderRoutes = (
    routes: IRoute[],
    extraProps = {},
    switchProps = {},
  ) => {
    return routes ? (
      <Switch {...switchProps}>
        {routes.map((route, i) => {
          if (route.redirect) {
            return <Redirect key={i} path={route.path} to={route.redirect} />;
          }
          const Com = route.component;
          return Com ? (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={(props) => (
                <Com {...props} {...extraProps} route={route} />
              )}
            />
          ) : null;
        })}
      </Switch>
    ) : null;
  };

  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Suspense fallback={<div>加载中...</div>}>
          <BasicLayout>
            <HashRouter>{renderRoutes(routers)}</HashRouter>
          </BasicLayout>
        </Suspense>
      </ConfigProvider>
    </div>
  );
}

export default App;

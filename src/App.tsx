/** @format */
import BasicLayout from '@layout/BasicLayout';
import routers, { Route as IRoute } from '@routes/router';
import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './App.less';

function App() {
  const withOutLayoutRoute = routers.filter((item) => item.path === '/login');
  const renderRoutes = (routes: IRoute[], extraProps = {}) => {
    return routes
      ? routes
          .filter((item) => item.path !== '/login')
          .map((route, i) => {
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
          })
      : null;
  };

  const renderWithOutLayout = (routes: IRoute[], extraProps = {}) => {
    return routes.map((route, i) => {
      const Com = route.component;
      return Com ? (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => <Com {...props} {...extraProps} route={route} />}
        />
      ) : null;
    });
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<div>加载中...</div>}>
        <HashRouter>
          <Switch>
            {renderWithOutLayout(withOutLayoutRoute)}
            <BasicLayout>{renderRoutes(routers)}</BasicLayout>
          </Switch>
        </HashRouter>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;

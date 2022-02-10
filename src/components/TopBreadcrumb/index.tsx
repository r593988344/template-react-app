import React from 'react';
import { useLocation, Link, HashRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import routers from '@routes/router';

const TopBreadcrumb: React.FC = () => {
  const breadcrumbNameMap: Record<string, string> = {};
  routers.forEach((item) => {
    if (item.path && item.name) {
      breadcrumbNameMap[item.path] = item.name;
    }
  });
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link to='/'>Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <HashRouter>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </HashRouter>
  );
};

export default TopBreadcrumb;

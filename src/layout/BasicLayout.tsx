/** @format */
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  GoldenFilled,
  CodepenSquareFilled,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import TopBreadcrumb from '@components/TopBreadcrumb';
import styles from './index.module.less';
import { useHistory } from 'react-router-dom';
import { selectCollapsed, setCollapsed } from './layout.slice';
import { useDispatch, useSelector } from 'react-redux';

interface MenuListItem {
  name: string;
  path?: string;
  children?: MenuListItem[];
  icon?: React.ReactElement;
}

const menuList: MenuListItem[] = [
  {
    name: 'Home',
    path: '/home',
    icon: <HomeFilled />,
  },
  {
    name: 'Data & Images',
    icon: <GoldenFilled />,
    children: [
      {
        name: 'Volumes',
        path: '/home',
      },
    ],
  },
  {
    name: 'Models',
    icon: <CodepenSquareFilled />,
    children: [
      {
        name: 'Notebooks',
        path: '/home',
      },
      {
        name: 'Pipelines',
        path: '/home',
      },
      {
        name: 'Runs',
        path: '/home',
      },
      {
        name: 'Experiments',
        path: '/home',
      },
    ],
  },
];

const BasicLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const collapsed = useSelector(selectCollapsed);
  const toggle = () => {
    dispatch(setCollapsed(!collapsed));
  };
  const handleRoute = (path: string) => {
    history.push(path);
  };
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>MetaAI</div>
        <div className={styles.spiltLine} />
        <div className={styles.logoTitle}>
          面向数据科学家的一站式全托管机器学习平台
        </div>
      </Header>
      <Layout>
        <Sider
          className={styles.sider}
          width={216}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={styles.trigger}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                onClick: toggle,
              },
            )}
          </div>
          <Menu
            className={styles.menu}
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            {menuList.map((item) => {
              if (item.children) {
                return (
                  <SubMenu key={item.name} icon={item.icon} title={item.name}>
                    {item.children.map((menu) => (
                      <Menu.Item
                        key={menu.name}
                        onClick={() => handleRoute(item.path || '/')}
                      >
                        {menu.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item
                  key={item.name}
                  icon={item.icon}
                  onClick={() => handleRoute(item.path || '/')}
                >
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <div className={styles.breadcrumb}>
            <TopBreadcrumb />
          </div>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

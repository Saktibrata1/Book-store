import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  BookOutlined,
  PlusOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

const AppHeader = () => {
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Header style={{ backgroundColor: '#232F3D' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedTab]}
        onSelect={(e) => handleTabChange(e.key)}
      >
        <Menu.Item key="home" icon={<BookOutlined />}>
          <NavLink to="/" style={{ color: 'white' }}>
            Home
          </NavLink>
        </Menu.Item>
        <SubMenu key="submenu" icon={<PlusOutlined />} title="Products">
          <Menu.Item key="add" icon={<PlusOutlined />}>
            <NavLink to="/signin" style={{ color: 'white' }}>
              Add Product
            </NavLink>
          </Menu.Item>
          <Menu.Item key="books" icon={<BookOutlined />}>
            <NavLink to="/books" style={{ color: 'white' }}>
              Books
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          <NavLink to="/about" style={{ color: 'white' }}>
            About Us
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;

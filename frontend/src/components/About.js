import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title level={2} style={{ fontFamily: 'fantasy' }}>
        This is a "Book store" Ecommerce Application
      </Title>
      <Title level={3} style={{ fontFamily: 'fantasy' }}>
        By Saktibrata Sarma
      </Title>
    </div>
  );
};

export default About;

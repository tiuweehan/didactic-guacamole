import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '45px', background: '#050505' }} />
    </>
  );
};

export default Layout;

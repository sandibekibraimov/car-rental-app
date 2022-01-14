import React, { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* header */}
      <div className='header box-shadow1'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>CarRentalApp</h1>
        </div>
      </div>

      {/* main content */}
      <div className='content'>{children}</div>
    </Fragment>
  );
};

export default Layout;

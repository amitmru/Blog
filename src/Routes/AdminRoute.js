import React from 'react';
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';
import LayOut2 from '../Admin/components/Lay_out.js/LayOut2';
import Content from '../Admin/conatiner/Content/Content';
import Category from '../Admin/conatiner/Category/Category';

function AdminRoute(props) {
  return (
    <LayOut>
      <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/managecontent' element={<Content />} />
          <Route path='/category' element={<Category />} />
      </Routes>
    </LayOut>
  );
}

export default AdminRoute;
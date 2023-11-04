import React from 'react';
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';

function AdminRoute(props) {
  return (
    <LayOut>
      <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </LayOut>
  );
}

export default AdminRoute;
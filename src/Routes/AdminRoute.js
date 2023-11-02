import React from 'react';
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

function AdminRoute(props) {
  return (
    <div>
      <LayOut>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/dahsboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </LayOut>
    </div>
  );
}

export default AdminRoute;
import React from 'react';
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';

function AdminRoute(props) {
  return (
    <div>
      <LayOut>
        <Routes>
          <Route path='/dahsboard' element={<Dashboard />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default AdminRoute;
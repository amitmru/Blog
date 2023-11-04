import React from 'react';
import { Navigate, Outlet } from 'react-router';

function PrivateRoute(props) {
    
    let auth = true;

    return (
        <>
            {
                auth ? <Outlet /> : <Navigate to={"/Auth"} replace />
            }
        </>
    );
}

export default PrivateRoute;
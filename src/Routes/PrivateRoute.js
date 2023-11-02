import React from 'react';

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
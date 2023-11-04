import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoute from "./Routes/UserRoute";
import AdminRoute from "./Routes/AdminRoute";
import PrivateRoute from "./Routes/PrivateRoute";


function App() {
  return (
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/admin/*" element={<AdminRoute />} />
        </Route>
      </Routes>
  );
}

export default App;

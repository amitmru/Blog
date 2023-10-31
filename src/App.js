import { Route, Routes } from "react-router-dom";
import UserRoute from "./Routes/UserRoute";
import AdminRoute from "./Routes/AdminRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoute />}/>
        <Route path="/admin/*" element={<AdminRoute />}/>
      </Routes>
    </>
  );
}

export default App;

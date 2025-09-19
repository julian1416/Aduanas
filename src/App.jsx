// src/App.jsx

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DashboardPage from "./pages/DashboardPage";
// ... el resto de las importaciones de páginas

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        {/* ... el resto de las rutas */}
      </Route>
    </Routes>
  );
}

export default App;
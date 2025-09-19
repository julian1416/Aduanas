// src/components/layout/Sidebar.jsx

import { NavLink } from "react-router-dom";
import navigationConfig from "../../config/navigation";

const Sidebar = () => {
  return (
    // Encabezado/Fondo: usa brand-dark (#141b41)
    <aside className="w-64 flex-shrink-0 bg-brand-dark text-white flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
        <h1 className="text-white">Tu Logo</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          {navigationConfig.map((item, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors duration-200 font-medium ${
                    isActive
                      ? "bg-brand-primary text-white shadow-inner" // Elemento activo
                      // Hover de menú: usa brand-accent (#98b9f2)
                      : "text-gray-300 hover:bg-brand-accent hover:text-brand-dark" 
                  }`
                }
              >
                <span className="ml-3">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-400">
        <p>© 2025 Aranceles App</p>
      </div>
    </aside>
  );
};

export default Sidebar;
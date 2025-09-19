// src/components/layout/Header.jsx

const Header = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      {/* Podríamos poner el título de la página actual aquí en el futuro */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Inicio</h2>
      </div>

      {/* Placeholder para información del usuario */}
      <div className="flex items-center">
        <span className="text-gray-600">Bienvenido, Usuario</span>
        {/* Aquí iría un ícono o avatar de perfil */}
      </div>
    </header>
  );
};

export default Header;
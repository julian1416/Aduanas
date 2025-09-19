// src/pages/DashboardPage.jsx

const DashboardPage = () => {
  return (
    <div>
      {/* Título del cuerpo: usa brand-primary (#306bac) */}
      <h1 className="text-3xl font-bold text-brand-primary mb-8">
        Dashboard de Aranceles
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Calculadora y Asistente Arancelario
        </h2>
        <p className="text-gray-500 mb-6">
          Comienza escribiendo el nombre del producto que deseas importar para
          clasificarlo y calcular sus costos.
        </p>
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Ej: Zapatos de cuero, teléfonos móviles, arroz..."
            // Active de campo de texto: usa brand-dark (#141b41)
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition"
          />
          {/* Botón: usa brand-primary (#306bac) */}
          {/* Hover de botón: usa brand-dark (#141b41) */}
          <button className="bg-brand-primary text-white font-bold py-3 px-6 rounded-r-lg hover:bg-brand-dark transition-colors duration-300">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
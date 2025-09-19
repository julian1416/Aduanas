// src/pages/CalculationAssistantPage.jsx
import Input from "../components/ui/input"; // Importamos nuestro nuevo componente

const CalculationAssistantPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-primary mb-8">
        Asistente de Cálculo de Aranceles
      </h1>

      {/* --- Contenedor de Parámetros --- */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
          Parámetros de la Importación
        </h2>

        {/* --- Fila de Inputs --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna 1 */}
          <div>
            <label htmlFor="tariff-type" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de arancel
            </label>
            <select
              id="tariff-type"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition"
            >
              <option>Ad Valorem</option>
              <option>Específico</option>
              <option>Mixto</option>
            </select>
          </div>
          <Input label="Valor CIF (USD)" id="cif-value" type="number" placeholder="10000" />
          <Input label="Unidades físicas" id="units" type="number" placeholder="100" />
          <Input label="Tasa ad valorem (%)" id="ad-valorem-rate" type="number" placeholder="10" />
          <Input label="Tasa específica (USD / unidad)" id="specific-rate" type="number" placeholder="2" />
          <Input label="Reducción por TLC (%)" id="tlc-reduction" type="number" placeholder="0" />
        </div>
      </div>

      {/* --- Contenedor de Resultados --- */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
          Resultado del Cálculo
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Base calculada:</span>
            <span className="font-bold text-gray-800">US$ 1.000,00</span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Descuento TLC:</span>
            <span className="font-bold text-green-600">US$ 0,00</span>
          </div>
          <hr/>
          <div className="flex justify-between items-center text-2xl">
            <span className="font-semibold text-brand-primary">Total a pagar:</span>
            <span className="font-bold text-brand-primary">US$ 1.000,00</span>
          </div>
        </div>

        <div className="mt-8 text-right">
            <button className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-dark transition-colors duration-300">
                Exportar TXT
            </button>
        </div>
      </div>
    </div>
  );
};

export default CalculationAssistantPage;
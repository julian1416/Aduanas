// src/components/ui/Input.jsx

const Input = ({ label, id, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition"
      />
    </div>
  );
};

export default Input;
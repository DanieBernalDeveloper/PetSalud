import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaCheckCircle, FaPlus, FaSearch } from "react-icons/fa";

function ListSpecialists({ isAdmin = true }) {
  const [specialists, setSpecialists] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [search, setSearch] = useState(""); // 🔍 Estado para buscador
  const navigate = useNavigate();

  useEffect(() => {
    const specialistsData = localStorage.getItem("specialists");
    if (specialistsData) {
      setSpecialists(JSON.parse(specialistsData));
    }
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const deleteSpecialist = (id) => {
    setSpecialists((prev) => {
      const updatedSpecialists = prev.filter((specialist) => specialist.id !== id);
      localStorage.setItem("specialists", JSON.stringify(updatedSpecialists));
      return updatedSpecialists;
    });

    setOpenMenu(null);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // 🔎 Filtrar especialistas según búsqueda
  const filteredSpecialists = specialists.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.phone.toLowerCase().includes(search.toLowerCase()) ||
    s.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Encabezado con buscador y botón agregar */}
      <div className="flex justify-between items-center mb-4">
        {/* Buscador */}
        <div className="relative w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar especialista..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        {/* Botón para agregar especialista */}
        {isAdmin && (
          <button
            className="bg-[#37474F] text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-[#263238] transition cursor-pointer"
            onClick={() => navigate("/admin/new")}
          >
            <FaPlus /> Agregar usuario
          </button>
        )}
      </div>

      {/* Tabla de especialistas */}
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left border-b border-gray-300">Nombre</th>
            <th className="p-3 text-left border-b border-gray-300">Correo</th>
            <th className="p-3 text-left border-b border-gray-300">Rol</th>
            <th className="p-3 text-left border-b border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredSpecialists.map((specialist) => (
            <tr key={specialist.id} className="border-b border-gray-300 relative">
              <td className="p-3">{specialist.name}</td>
              <td className="p-3">{specialist.phone}</td>
              <td className="p-3">{specialist.specialty}</td>
              <td className="p-3">
                <div className="relative">
                  <button
                    className="text-lg cursor-pointer"
                    onClick={() => toggleMenu(specialist.id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenu === specialist.id && (
                    <div className="absolute right-0 top-8 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                      <button
                        className="flex items-center p-2 w-full hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          navigate(`${isAdmin ? "/admin/" : "/viewer/"}${specialist.id}`)
                        }
                      >
                        <FaInfoCircle className="text-blue-500 mr-2" /> Ver información
                      </button>
                      {isAdmin && (
                        <button
                          className="flex items-center p-2 w-full hover:bg-gray-100 cursor-pointer"
                          onClick={() => deleteSpecialist(specialist.id)}
                        >
                          <FaTrashAlt className="text-red-500 mr-2" /> Eliminar
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
          {filteredSpecialists.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No se encontraron especialistas
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Notificación de eliminado */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg flex items-center p-4 transition-opacity duration-500 opacity-100 animate-fadeOut">
          <FaCheckCircle className="text-green-500 text-3xl mr-3" />
          <span className="text-gray-700 font-medium">
            El especialista ha sido eliminado correctamente
          </span>
        </div>
      )}
    </div>
  );
}

export default ListSpecialists;

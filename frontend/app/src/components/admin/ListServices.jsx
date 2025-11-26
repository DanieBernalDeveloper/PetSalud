import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaCheckCircle, FaPlus } from "react-icons/fa";

function ListServices({ isAdmin = true }) {
  const [services, setServices] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const servicesData = localStorage.getItem("services");

    if (servicesData) {
      setServices(JSON.parse(servicesData));
    }
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const deleteService = (id) => {
    setServices((prev) => {
      const updatedServices = prev.filter((service) => service.id !== id);
      localStorage.setItem("services", JSON.stringify(updatedServices));
      return updatedServices;
    });

    setOpenMenu(null);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      {/* Botón para agregar servicio */}
      {isAdmin && (
        <div className="flex justify-start mb-4">
          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-red-600 transition cursor-pointer"
            onClick={() => navigate("/admin/services/new")}
          >
            <FaPlus /> Agregar servicio
          </button>
        </div>
      )}
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left border-b border-gray-300">Servicio</th>
            <th className="p-3 text-right border-b border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-b border-gray-300 relative">
              <td className="p-3">{service.name}</td>
              <td className="p-3 text-right">
                <div className="relative">
                  <button
                    className="text-red-500 text-lg cursor-pointer"
                    onClick={() => toggleMenu(service.id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenu === service.id && (
                    <div className="absolute right-0 top-8 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                      <button
                        className="flex items-center p-2 w-full hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          navigate(
                            `${isAdmin ? "/admin/services/" : "/viewer/services/"}${service.id}`
                          )
                        }
                      >
                        <FaInfoCircle className="text-red-500 mr-2" /> Ver información
                      </button>
                      {isAdmin && (
                        <button
                          className="flex items-center p-2 w-full hover:bg-gray-100 cursor-pointer"
                          onClick={() => deleteService(service.id)}
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
        </tbody>
      </table>

      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg flex items-center p-4 transition-opacity duration-500 opacity-100 animate-fadeOut">
          <FaCheckCircle className="text-red-500 text-3xl mr-3" />
          <span className="text-gray-700 font-medium">
            El servicio ha sido eliminado correctamente
          </span>
        </div>
      )}
    </div>
  );
}

export default ListServices;

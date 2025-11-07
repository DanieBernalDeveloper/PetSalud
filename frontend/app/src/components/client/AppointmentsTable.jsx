import React from "react";

const AppointmentsTable = () => {
  const appointments = [
    { service: "Consulta General", date: "10/08/2025", time: "09:10 a.m." },
    { service: "Diagnóstico por imágenes", date: "30/08/2025", time: "08:10 a.m." },
    { service: "Desparasitación", date: "10/09/2025", time: "09:10 a.m." },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b p-4 text-gray-600 font-semibold">Servicio</th>
            <th className="border-b p-4 text-gray-600 font-semibold">Fecha</th>
            <th className="border-b p-4 text-gray-600 font-semibold">Hora</th>
            <th className="border-b p-4 text-gray-600 font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b p-4">{appointment.service}</td>
              <td className="border-b p-4">{appointment.date}</td>
              <td className="border-b p-4">{appointment.time}</td>
              <td className="border-b p-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600">
                  Confirmar
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;

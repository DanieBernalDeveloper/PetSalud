import { useState } from "react";

function Register() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 gap-12">
      {/* Iniciar sesión */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4 text-center">Iniciar sesión</h2>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>

      {/* Registro */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4 text-center">Registro</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Home, BarChart3, Settings } from "lucide-react";

const data = [
  { name: "Ene", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Abr", value: 200 },
  { name: "May", value: 700 },
];

const users = [
  {
    nombre: "Juan Pérez",
    correo: "juan@example.com",
    subscripcion: "Negocios",
    numero: "987654321",
    contraseña: "******",
    fecha: "2025-01-15",
  },
  {
    nombre: "María López",
    correo: "maria@example.com",
    subscripcion: "Principiantes",
    numero: "912345678",
    contraseña: "******",
    fecha: "2025-02-20",
  },
  {
    nombre: "Carlos García",
    correo: "carlos@example.com",
    subscripcion: "Creativa",
    numero: "987123456",
    contraseña: "******",
    fecha: "2025-03-05",
  },
];

export default function Dashboard() {
  const [active, setActive] = useState("Inicio");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">IA Generation Academy</h1>
        <nav className="space-y-2">
          <button
            onClick={() => setActive("Inicio")}
            className={`flex items-center p-2 rounded-lg w-full ${
              active === "Inicio"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            <Home className="mr-2" /> Inicio
          </button>
          <button
            onClick={() => setActive("Reportes")}
            className={`flex items-center p-2 rounded-lg w-full ${
              active === "Reportes"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            <BarChart3 className="mr-2" /> Reportes
          </button>
          <button
            onClick={() => setActive("Configuración")}
            className={`flex items-center p-2 rounded-lg w-full ${
              active === "Configuración"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            <Settings className="mr-2" /> Configuración
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">{active}</h2>

        {/* Contenido dinámico */}
        {active === "Inicio" && (
          <>
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold">Usuarios</h3>
                <p className="text-3xl font-bold">1,245</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold">Ventas</h3>
                <p className="text-3xl font-bold">$12,430</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold">Visitas</h3>
                <p className="text-3xl font-bold">32,500</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Actividad Mensual</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {active === "Reportes" && (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-lg font-semibold mb-4">Registro de usuarios</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left rounded-tl-xl">Nombre</th>
            <th className="p-3 text-left">Correo</th>
            <th className="p-3 text-left">Subscripción</th>
            <th className="p-3 text-left">Número</th>
            <th className="p-3 text-left">Contraseña</th>
            <th className="p-3 text-left rounded-tr-xl">Fecha de registro</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user, idx) => (
            <tr
              key={idx}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="p-3">{user.nombre}</td>
              <td className="p-3">{user.correo}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.subscripcion === "Premium"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {user.subscripcion}
                </span>
              </td>
              <td className="p-3">{user.numero}</td>
              <td className="p-3">{user.contraseña}</td>
              <td className="p-3">{user.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

        {active === "Configuración" && (
          <div className="text-gray-500 italic">
            Aún no hay configuraciones disponibles.
          </div>
        )}
      </div>
    </div>
  );
}

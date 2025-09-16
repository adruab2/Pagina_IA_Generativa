import { Clock, Users, Calendar, Award } from "lucide-react";

export default function CourseCard() {
    const cursos = [
        {
            title: "IA para principiantes",
            price: "$199",
            subtitle: "Aprende desde cero los fundamentos de la inteligencia artificial.",
            description: "Introducción a los conceptos básicos de IA, algoritmos y aplicaciones prácticas.",
            duration: "2 meses",
            level: "Principiante",
            schedule: "Martes y Jueves 7:00 PM - 9:00 PM",
            topics: [
                "Conceptos básicos de IA",
                "Algoritmos y modelos",
                "Aplicaciones prácticas",
                "Herramientas y recursos"
            ]
        },
        {
            title: "IA en los negocios",
            price: "$299",
            subtitle: "Aplica modelos generativos para optimizar procesos y crear valor.",
            description: "Aprende a integrar IA en estrategias empresariales para mejorar la eficiencia y la innovación.",
            duration: "3 meses",
            level: "Intermedio",
            schedule: "Lunes y Miércoles 6:00 PM - 8:00 PM",
            topics: [
                "Modelos generativos",
                "Optimización de procesos",
                "Estrategias empresariales",
                "Casos de estudio"
            ]
        },
        {
            title: "IA creativa",
            price: "$249",
            subtitle: "Explora cómo la IA puede ayudarte a crear contenido artístico único.",
            description: "Descubre técnicas para utilizar IA en la generación de arte, música y diseño.",
            duration: "2.5 meses",
            level: "Avanzado",
            schedule: "Sábados 10:00 AM - 1:00 PM",
            topics: [
                "Generación de arte con IA",
                "Música asistida por IA",
                "Diseño creativo",
                "Proyectos prácticos"
            ]
        }
    ];

 return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Nuestros Cursos
        </h2>

        {/* GRID DE CURSOS */}
        <div className="grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border"
            >
              {/* Título y precio */}
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {curso.title}
                </h2>
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {curso.price}
                </span>
              </div>

              {/* Subtítulo */}
              <p className="text-gray-600 mt-1">{curso.subtitle}</p>

              {/* Descripción */}
              <p className="text-gray-700 mt-3 text-sm">{curso.description}</p>

              {/* Info del curso */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{curso.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>{curso.level}</span>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{curso.schedule}</span>
              </div>

              {/* Lista de aprendizajes */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <h3 className="font-semibold text-gray-900">
                    Lo que aprenderás:
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {curso.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              {/* Botón */}
              <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition">
                <a href="#inscripcion">Inscribirse Ahora</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
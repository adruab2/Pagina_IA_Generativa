import { Navbar, Header, Footer, Formulario } from "./components";

function App() {
  return (
    <>
      <Navbar />
      {/* Sección superior con encuesta a la derecha */}
            {/* pr*/}
      <Header />

{/* Sección sobre la IA */}
<section
  className="about bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-6 md:px-20 text-black"
  id="about"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Texto */}
    <div className="animate-slideInLeft">
      <h2 className="text-4xl font-extrabold mb-6 animate-fadeIn">
        ¿Qué es la <span className="text-blue-600">IA Generativa</span>?
      </h2>
      <p
        className="text-lg mb-4 leading-relaxed animate-fadeIn"
        style={{ animationDelay: "0.3s" }}
      >
        La <strong>IA generativa</strong> utiliza modelos avanzados de inteligencia artificial
        para <span className="text-blue-600">crear imágenes, textos, música y mucho más</span>.
        Estas herramientas permiten que las computadoras no solo analicen datos, sino que también
        sean capaces de producir contenido completamente nuevo.
      </p>
      <p
        className="text-lg mb-6 leading-relaxed animate-fadeIn"
        style={{ animationDelay: "0.6s" }}
      >
        En <strong>IA Generation Academy</strong>, aprenderás a aplicar esta tecnología en
        proyectos reales, desde la creación artística hasta soluciones de negocio que
        revolucionan la forma en que trabajamos y aprendemos.
      </p>

      {/* Lista de beneficios mejorada */}
      <ul className="space-y-3">
        <li
          className="flex justify-center items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 animate-fadeIn"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="font-medium">
            Aprende cómo funcionan los modelos generativos más usados (GPT, DALL·E, Stable Diffusion).
          </span>
        </li>
        <li
          className="flex justify-center items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 animate-fadeIn"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="font-medium">
            Aplica la IA para impulsar tu creatividad y productividad.
          </span>
        </li>
        <li
          className="flex justify-center items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 animate-fadeIn"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="font-medium">
            Desarrolla habilidades que te abrirán puertas en el mercado laboral.
          </span>
        </li>
      </ul>
    </div>

    {/* Imagen */}
    <div className="flex justify-center animate-slideInRight">
      <img
        src="https://divulgaciencia.org/wp-content/uploads/2024/05/1.-IA-gen-Copilot-Dalle.jpg"
        alt="IA Generativa"
        className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</section>

      {/*  Sección cursos  */}
      <section className="courses" id="courses">
        <h2>Nuestros Cursos</h2>
        <div className="course-list">
          <div className="course">
            <h3>IA para principiantes</h3>
            <p>Aprende desde cero los fundamentos de la inteligencia artificial.</p>
          </div>
          <div className="course">
            <h3>IA en los negocios</h3>
            <p>Aplica modelos generativos para optimizar procesos y crear valor.</p>
          </div>
          <div className="course">
            <h3>IA creativa</h3>
            <p>Explora cómo la IA puede ayudarte a crear contenido artístico único.</p>
          </div>
        </div>
      </section>

      {/*  Sección testimonios  */}
      <section className="testimonials" id="testimonials">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <blockquote>
          "Este curso cambió mi visión sobre la tecnología y la creatividad." - Ana M.
        </blockquote>
        <blockquote>
          "La IA ahora es parte de mi negocio gracias a estas clases." - Carlos G.
        </blockquote>
      </section>

      {/*  Encuesta inferior */}
      <section className="survey-bottom" id="inscripcion">
        <h2>¡Inscríbete en Nuestros Cursos!</h2>
        <Formulario  />
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

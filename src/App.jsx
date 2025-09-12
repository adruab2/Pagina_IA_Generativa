import { Navbar, Header, Footer, Formulario } from "./components";

function App() {
  return (
    <>
      <Navbar />
      {/* Sección superior con encuesta a la derecha */}
      <Header />

      {/* Sección sobre la IA */}
      <section className="about" id="about">
        <h2>¿Qué es la IA Generativa?</h2>
        <p>
          La IA generativa utiliza modelos avanzados para crear imágenes, textos, música y más. Está
          revolucionando la manera en que trabajamos y aprendemos.
        </p>
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

      {/* Sección de preguntas frecuentes */}
      <section className="faq" id="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <h3>¿Qué es la IA generativa?</h3>
          <p>La IA generativa es una rama de la inteligencia artificial que se centra en crear contenido nuevo y original, como texto, imágenes y música.</p>
        </div>
        <div className="faq-item">
          <h3>¿Necesito experiencia previa?</h3>
          <p>No, nuestros cursos están diseñados para principiantes y no se requiere experiencia previa en programación o IA.</p>
        </div>
        <div className="faq-item">
          <h3>¿Cómo puedo inscribirme?</h3>
          <p>Puedes inscribirte a través del formulario en la sección de inscripción de esta página.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

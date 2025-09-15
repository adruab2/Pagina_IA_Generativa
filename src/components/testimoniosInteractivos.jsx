import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import clsx from 'clsx';

const testimonios = [
  {
    nombre: 'Ana M.',
    texto: 'Este curso cambió mi visión sobre la tecnología y la creatividad.',
    calificacion: 5,
    avatar: 'https://ui-avatars.com/api/?name=Ana+M.&background=0D8ABC&color=fff',
  },
  {
    nombre: 'Carlos G.',
    texto: 'La IA ahora es parte de mi negocio gracias a estas clases.',
    calificacion: 4,
    avatar: 'https://ui-avatars.com/api/?name=Carlos+G.&background=0D8ABC&color=fff',
  },
  {
    nombre: 'Lucía P.',
    texto: 'Aprendí a usar IA para mis proyectos artísticos. ¡Recomendado!',
    calificacion: 5,
    avatar: 'https://ui-avatars.com/api/?name=Lucia+P.&background=0D8ABC&color=fff',
  },
  {
    nombre: 'Javier R.',
    texto: 'Los instructores son expertos y las clases muy prácticas.',
    calificacion: 4,
    avatar: 'https://ui-avatars.com/api/?name=Javier+R.&background=0D8ABC&color=fff',
  },
  {
    nombre: 'Marta S.',
    texto: 'Una experiencia educativa que superó mis expectativas.',
    calificacion: 5,
    avatar: 'https://ui-avatars.com/api/?name=Marta+S.&background=0D8ABC&color=fff',
  },
  {
    nombre: 'Luis T.',
    texto: 'Ahora entiendo cómo aplicar la IA en mi trabajo diario.',
    calificacion: 4,
    avatar: 'https://ui-avatars.com/api/?name=Luis+T.&background=0D8ABC&color=fff',
  },
];

const TestimoniosInteractivos = () => {
  const swiperRef = useRef(null);
  const prefersReduced = useReducedMotion();

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={24}
      loop
      onSwiper={(s) => (swiperRef.current = s)}
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      className="md:max-w-6xl mx-auto"
      style={{ padding: '4rem 2.5rem' }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonios.map((testimonio, idx) => (
        <SwiperSlide key={idx} className="h-full flex">
          <motion.div
            className={clsx(
              'bg-white/90 rounded-2xl shadow-2xl p-6 flex-1 flex flex-col items-center gap-4',
              'border border-blue-100 hover:shadow-blue-200 transition-all duration-300',
              'h-[360px]'
            )}
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            role="group"
            aria-label={`Testimonio de ${testimonio.nombre}`}
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < testimonio.calificacion ? 'text-yellow-400' : 'text-gray-300'}
                  fill={i < testimonio.calificacion ? '#facc15' : 'none'}
                  aria-hidden
                />
              ))}
            </div>
            <Quote className="text-blue-200 w-7 h-7 mb-2" aria-hidden />
            <p className="text-lg italic text-center text-gray-700 flex-1 flex items-center">
              "{testimonio.texto}"
            </p>
            <div className="flex items-center gap-3 mt-3">
              <img
                src={testimonio.avatar}
                alt={`Avatar de ${testimonio.nombre}`}
                className="w-12 h-12 rounded-full border-2 border-blue-200"
                loading="lazy"
              />
              <span className="font-semibold text-blue-600">{testimonio.nombre}</span>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimoniosInteractivos;

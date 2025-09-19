import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import clsx from "clsx";
import { menuItems } from "../constants/menuItems.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courses = ["IA para principiantes", "IA en los negocios", "IA creativa"];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@iaacademy.com", href: "mailto:info@iaacademy.com" },
    { icon: Phone, text: "+51 123-456-789", href: "tel:+51123456789" },
    { icon: MapPin, text: "Ciudad Universitaria, Perú", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección de la marca */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">IA Academy</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu academia líder en inteligencia artificial generativa. Aprende las tecnologías del
              futuro con expertos de la industria.
            </p>
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-300"
              whileHover={{ scale: 1.02 }}
            >
              <Award className="w-4 h-4 text-blue-400" />
              <span>Certificaciones oficiales</span>
            </motion.div>
          </motion.div>

          {/* Enlaces de navegación */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-2">
              {menuItems.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Cursos disponibles */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Nuestros Cursos</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <motion.li
                  key={course}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <a
                    href="#courses"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {course}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <contact.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="pt-2">
              <h5 className="text-sm font-medium text-white mb-3">Síguenos</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={clsx(
                      "w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200",
                      social.color
                    )}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <Users className="w-4 h-4" />
              <span>Más de 1,000 estudiantes capacitados</span>
            </motion.div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              &copy; {currentYear} IA Academy. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

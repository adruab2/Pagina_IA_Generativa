export const courseService = {
  getCourses: async () => {
    // Conexión futura a API
    return fetch('/api/courses').then(r => r.json());
  }
};
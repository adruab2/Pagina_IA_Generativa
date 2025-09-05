# Guía de Contribución Interna

Este documento sirve para que todo el equipo tenga claras las reglas y pasos básicos para contribuir al repositorio.

---

## 🚦 Paso a paso para contribuir

1. **Clona el repositorio (solo la primera vez):**
   ```bash
   git clone https://github.com/adruab2/Pagina_IA_Regenerativa.git
   cd Pagina_IA_Regenerativa
   ```

2. **Actualiza la rama `master` antes de empezar a trabajar:**
   ```bash
   git checkout master
   git pull origin master
   ```

3. **(Opcional) Crea una rama para cambios grandes o riesgosos:**
   ```bash
   git checkout -b nombre-de-tu-rama
   ```

4. **Haz tus cambios en el código.**

5. **Agregar los archivos modificados al área de staging:**

   - Añade solo los archivos que realmente quieres incluir en el commit:

     ```bash
     git add archivo2
     ```

     O si tienes varios archivos específicos:

     ```bash
        git add archivo1 archivo2
    ```
   - Para revisar qué archivos han cambiado antes de añadirlos, usa:

     ```bash
     git status
     ```

6. **Haz commit con un mensaje claro y descriptivo:**
   ```bash
   git commit -m "Mensaje claro describiendo el cambio"
   ```

7. **Si trabajaste en una rama, actualiza master antes de integrar tus cambios:**
   ```bash
   git checkout master
   git pull origin master
   ```

8. **Integra tus cambios a `master` (si estabas en otra rama):**
   ```bash
   git merge nombre-de-tu-rama
   ```

9. **Sube tus cambios al repositorio remoto:**
   ```bash
   git push origin master
   ```

---

> Gracias por contribuir y mantener el proyecto organizado 🚀
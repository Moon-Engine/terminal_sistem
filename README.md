# 📟 Terminal de Acceso - Sector 4

Un sistema interactivo de control de terminal retro con efecto CRT, simulador de teclado mecánico, inicio de sesión de personal y panel de gestión de directivas (CRUD) aislado por operario.

---

## 🚀 Características Principales

*   **🖥️ Estética Retro CRT:** Interfaz visual con efecto de barrido (*scanlines*), resplandor de fósforo naranja/rojo (`#ff3300`) y parpadeo aleatorio simulando un monitor dañado.
*   **🎹 Sonido de Teclado Mecánico:** Los campos de texto reproducen sonidos de teclado antiguo en tiempo real al escribir, recreando la experiencia física de una terminal analógica.
*   **🔑 Autenticación Local:** Registro e inicio de sesión de operarios usando el almacenamiento local del navegador (`localStorage`).
*   **📑 Directivas Privadas (CRUD):**
    *   **Crear:** Inyección de nuevas directivas operativas con título, descripción y fecha límite de entrega.
    *   **Leer:** Visualización de registros en formato de tabla retro.
    *   **Actualizar/Borrar:** Modificación y eliminación de registros existentes.
    *   **🔒 Aislamiento de Datos:** Cada operario solo puede ver, editar y eliminar las directivas que él mismo ha registrado.
*   **⚙️ Compatibilidad Cordova:** Listo para empaquetarse como aplicación móvil híbrida.

---

## 📂 Estructura del Proyecto

*   `index.html` — Portal de acceso y registro de credenciales del personal del Sector 4.
*   `inicio.html` — Dashboard principal que muestra el estado operativo del sector y la información del usuario en sesión.
*   `tareas.html` — Consola de operaciones del CRUD de Directivas.
*   `js/` — Contiene las dependencias locales de `jQuery` y `Bootstrap` para un arranque offline rápido.
*   `css/` — Contiene los estilos base de Bootstrap y las configuraciones de la hoja de estilos retro.

---

## Integrantes:

* angel Briseño
* Sofia Suarez
* Martin salasar

## Url 
https://moon-engine.github.io/terminal_sistem/

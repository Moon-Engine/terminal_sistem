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

## 🛠️ Instalación y Uso Local

Este proyecto no requiere de bases de datos externas ni de compilación compleja para probarse localmente.

### Opción A: Ejecución Directa
1. Clona este repositorio o descarga los archivos.
2. Haz doble clic en [index.html](file:///c:/xampp/htdocs/proyectos/proyectos/terminal_sistem/index.html) para abrirlo directamente en tu navegador web.

### Opción B: A través de XAMPP (Localhost)
1. Coloca la carpeta del proyecto en `C:\xampp\htdocs\terminal_sistem`.
2. Inicia el servidor Apache desde el panel de control de XAMPP.
3. Navega a: `http://localhost/terminal_sistem/index.html`.

---

## 📝 Registro de Cambios Recientes

*   **Aislamiento de Registros por Operario:** Se actualizó `tareas.html` para enlazar cada directiva registrada al nombre de usuario activo, impidiendo que otros operarios visualicen o manipulen registros ajenos.
*   **Migración Automática de Datos:** El sistema migra de forma transparente cualquier directiva antigua previamente guardada sin dueño y la asigna al primer usuario que inicie sesión, evitando pérdidas de datos.
*   **Actualización Dinámica de Cabecera:** Limpieza de nombres harcodeados en el header para mostrar en tiempo real la firma de usuario logueado en todas las vistas de la terminal.

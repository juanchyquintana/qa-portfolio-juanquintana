# 🧪 Proyecto de Automatización Web – Cypress

Este proyecto forma parte de mi **Portfolio QA Automation**, realizado con **Cypress**, donde practiqué una cobertura completa de pruebas funcionales sobre **5 aplicaciones web demo**, incluyendo:

✔️ Manejo de alerts  
✔️ Validaciones en tablas  
✔️ Testing con SPA  
✔️ Manejo de estados y cantidades  
✔️ Stub & Mocking con `cy.intercept()`  
✔️ Flujo de checkout completo

---

## 🌐 Sitios y Tareas Automatizadas

### 1️⃣ Demoblaze – eCommerce básico  
🔗 https://www.demoblaze.com  
**Objetivo:** Agregar productos al carrito y validar precios.  
**Casos:**  
- **TC-DB01** Listado por categoría  
- **TC-DB02** Agregar producto (alert + cart)  
- **TC-DB03** Verificar carrito y total  
- **TC-DB04** Quitar producto  
- **TC-DB05** Navegación categoría → detalle → back  

---

### 2️⃣ TestSheepNZ – Calculadora  
🔗 https://testsheepnz.github.io/BasicCalculator.html  
**Objetivo:** Validar operaciones (+ - × ÷), decimales y errores.  
**Casos:**  
- **TC-CALC01** Suma básica  
- **TC-CALC02** División por cero  
- **TC-CALC03** Decimales  
- **TC-CALC04** Negativos  
- **TC-CALC05** Valores no numéricos  

---

### 3️⃣ Todo List – SPA CRUD  
🔗 https://todolist.james.am  
**Objetivo:** Crear, completar, editar, filtrar y eliminar tareas.  
**Casos:**  
- **TC-TD01** Crear tarea  
- **TC-TD02** Completar y filtrar  
- **TC-TD03** Editar tarea  
- **TC-TD04** Borrar tarea  
- **TC-TD05** Filtro *Active*  

---

### 4️⃣ Petstore – Catálogo & navegación  
🔗 https://petstore.octoperf.com/actions/Catalog.action  
**Objetivo:** Validar consistencia entre listado ↔ detalle y breadcrumbs.  
**Casos:**  
- **TC-PET01** Búsqueda por keyword  
- **TC-PET02** Consistencia de datos entre vistas  
- **TC-PET03** Filtrado por categoría  
- **TC-PET04** Navegación mediante breadcrumbs  

---

### 5️⃣ Demo Web Shop – Checkout con usuario registrado  
🔗 http://demowebshop.tricentis.com  
**Objetivo:** Cobertura avanzada del flujo completo de compra.  
**Casos:**  
- **TC-DWS01** Búsqueda y filtros  
- **TC-DWS02** Carrito multi-producto  
- **TC-DWS03** Cupón válido *(con `cy.intercept()` si aplica)*  
- **TC-DWS04** Checkout como usuario registrado (**número de orden OK**)  
- **TC-DWS05** Pago fallido simulado (**422 con intercept**)  

> 🔎 *Nota:* El entorno **redirige al carrito sin mensaje de error** en pagos fallidos.  
> Esto está documentado y validado correctamente en automatización.

---

## 📦 Aprendizajes

- 🧩 Uso de **custom commands** para flujos repetidos (login, carrito, etc.).
- 💬 Aserciones de UI dinámicas y validaciones de tablas.
- 🔄 Manejo de **DOM en aplicaciones SPA** (TodoList).
- 🌐 **Interceptación de requests** para mock de backend.
- 🧮 Validación de cálculos de precios, totales y cantidades.
- 🛠️ Buenas prácticas de sincronización **sin `cy.wait()` innecesarios**.
- 🗂️ Organización de test cases y control de versiones con Git.

---

**Autor:** Juan Diego Quintana  
QA Automation | QA Manual | Shift-Left Mindset  
📫 LinkedIn: https://www.linkedin.com/in/jdquintana/

 🛍️ Ecommerce React + Firebase

Proyecto simple de Ecommerce construido con **React**, **React Router** y **Firebase Firestore**. Incluye listado de productos, detalle, carrito y checkout con generación de órdenes.

---

## 🚀 Tecnologías

* React
* React Router DOM
* Firebase Firestore
* React‑Bootstrap
* React‑Spinners

---

## 📌 Funcionalidades

* Listado y filtrado de productos
* Obtención de productos desde Firebase.
* Filtrado por categoría usando React Router.
* Loader personalizado mientras se espera la respuesta.
* Detalle del producto
* Vista individual del producto.
* Control de cantidad disponible.
* Botón para ir al carrito luego de agregar.
* Botón para seguir comprando luego de agregar.

🛒 3. Carrito de compras

* Agregar productos con cantidad.
* Modificar cantidad.
* Eliminar productos.
* Vaciar carrito.
* Enviar orden de compra
* Cálculo automático del total.

🧾 4. Checkout con creación de orden

* Formulario controlado.
* Envío de orden a Firebase.
* Muestra del ID de compra y detalle del pedido.
* Botón Finalizar regresa a home y vacia el carrito.

---

## ❌ 5. Página de Error

* Error 404 para rutas no existentes.
* Mensaje amigable e imagen personaliza

---

## 📂 Estructura del proyecto
---
src/
│── components/
│ ├── ItemListContainer/
│ ├── ItemDetailContainer/
│ ├── Cart/
│ ├── Checkout/
│ ├── ErrorPage/
│ ├── Loading/
│ └── Navbar/
│── context/
│ └── CartContext.jsx
│── db/
│ └── db.js
│── assets/

---
## 🔧 Instalación y ejecución del proyecto

Nota: Esta sección es necesaria para que cualquier persona pueda clonar, instalar y correr tu proyecto sin problemas.

1️⃣ Clonar el repositorio
git clone [https://github.com/AndyPrezOk/CreaTuLanding-PerezA]

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar Firebase

Crear un archivo en:

   src/db/db.js

Con tu configuración:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {  apiKey: "AIzaSyDWjhI4kAXDIspvP8uukLGXvKG-06yR9hA",
  authDomain: "ecommerce-88020-e754d.firebaseapp.com",
  projectId: "ecommerce-88020-e754d",
  storageBucket: "ecommerce-88020-e754d.firebasestorage.app",
  messagingSenderId: "179219802767",
  appId: "1:179219802767:web:f1f8ff962b6e8990c61efa" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

4️⃣ Ejecutar el proyecto

## 👩‍💻 Autor

Proyecto desarrollado por *Andrea Perez*.


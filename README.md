# Amalgama Web Test

## Descripción

Amalgama Web Test es una aplicación creada con React, Redux y Axios. Su objetivo es servir como prueba técnica relacionada con React, evaluando tanto la comprensión de sus conceptos fundamentales como la capacidad para trabajar con el estado global y realizar llamadas a APIs.

## Características

- **React**: Construida con componentes funcionales y hooks.
- **Redux**: Manejo del estado global de manera eficiente.
- **Axios**: Realiza solicitudes HTTP para interactuar con una API.
- **Responsive Design**: La aplicación se adapta a diferentes tamaños de pantalla.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/amalgama-web-test.git
Navega al directorio del proyecto:

bash
Copiar código
cd amalgama-web-test
Instala las dependencias:

bash
Copiar código
npm install
Uso
Para iniciar la aplicación en modo de desarrollo, ejecuta:

bash
Copiar código
npm start
Esto abrirá la aplicación en tu navegador por defecto en http://localhost:3000.

Estructura del Proyecto
java
Copiar código
amalgama-web-test/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   ├── services/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

## Ejercicio 1 - Componentes

1. Enunciar todos problemas o posibilidades de mejoras para este componente. Mencionar
   cuáles de los problemas o posibilidades de mejoras enunciados son los más importantes.
2. Refactorizar el código y adjuntar cómo quedaría la solución luego de la refactorización.
3. Justificar lo realizado en el punto 2. explicando qué mejoras aporta y por qué soluciona lo
   comentado en el punto 1.

---

## Respuesta Ejercicio 1

Problemas o posibles mejoras

- El ejercicio tenia un error de cierre de parentesis "`)`" para el metodo `map`.

  | Justificación              | Mejora            |
  | -------------------------- | ----------------- |
  | Corregir error de sintaxis | Visualizar la app |

  Fragmento de código que presentaba el error ->

```javascript
{
  contact.addresses.map((address) => (
    <ul>
      <li>{address.line_1}</li>
      <li>{address.line_2}</li>
      <li>{address.zip_code}</li>
      <li>{address.city}</li>
      <li>{address.state}</li>
    </ul>
  )) // Aqui faltaba un parentesis de cierre
}
```

- Creacion de datos falsos (Data mockup). `contacts`, `states`, `cities`
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Simular datos | Velocidad de prueba |

- Faltaba crear una función llamada `truncate`. Se deduce que limita la longitud de un texto. Esta función fue cambiada a `truncateString`.
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Utilizar un nombre mas descriptivo | Comprensión del código |

- Faltaba crear una función llamada `findByID`. Se deduce que buscaba el nombre de un estado o ciudad por su ID. Esta función fue cambiada a `findNameByID`
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Utilizar un nombre mas descriptivo | Comprensión del código |

- Hacer `arrow functions` para reducir lineas de código
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Reducir lineas de código | Código mas limpio/compacto, comprensión y mantenimiento del código |

- Cambiar nombre de componente de `ContactsComponent` a `Contacts`
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Evita redundancia con la palabra `Component` | Crear estructura de carpetas para agrupar componentes y funciones|

- Crear componente hijo llamado `Contact` para el componente padre llamado `Contacts`
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Evitar componentes mas grandes y complejos | Reutilizar código, organizar y dividir la complejidad en fragmentos mas pequenos|

- Eliminar los warnings `Each child in a list should have a unique "key" prop.` Colocando una key prop a cada componente que se iteran en el metodo `map`
  en los componentes `Contacts` y `Contact`
  | Justificación | Mejora |
  | ------------------------------------------------------- | ------------------- |
  | Eliminar los warnings | Para react es mas facil interactuar/actualizar los items si estan identificados con una key unica|

Puntos mas importante en el ejercicio

- Corregir el error de sintaxis.
- Crear una peque;a estructura de datos falsos.
- Crear las funciones `truncate` y `findByID`(arrow functions).
- Cambiar las funciones a nombres mas descriptivos.
- Simplificar el código en el componente `Contacts` y crear un componente hijo reutilizable `Contact`.
- Evitar redundancia en los nombres de componentes.
- Agrupar componentes y funciones en carpetas.
- Arreglar los warnings de `Each child in a list should have a unique "key" prop.`.

---

## Ejercicio 2 - Estado

1. Proponer cómo se podría guardar esta información en el estado local. Por ejemplo si se
   usa redux, qué reducers se definirían o, si se usa, mobx que stores tendrías.
2. Listar que problemas o puntos a destacar tiene la forma elegida.
3. Adjuntar un JSON de cómo quedaría esta información guardada de la forma elegida en el punto 1.

---

## Respuesta Ejercicio 2

Problemas o puntos a destacar (Redux)

- Solo usar estados globales si es necesario. Evita complejidad innecesaria. Los patrones de los manejadores de estados pueden ser complicados a veces.
- Redux es mas robusto para apps grandes. Sobre todo por el control y performance.
- Para aplicaciones peque;as es mejor usar API Context de React. Es mas facil, sencillo y en apps peque;as no decae su performance.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

Autor
Tu Nombre

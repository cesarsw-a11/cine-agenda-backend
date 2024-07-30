# Sistema de Agenda de Salas de Cine

Este proyecto es un sistema de agenda para una sala de cine, desarrollado con NestJS. El sistema permite gestionar reservas de boletos para una película en varias salas, con diferentes horarios y aforos.

## Requisitos del Proyecto

### Condiciones Generales

- **Película**: Solo hay una película disponible en todas las salas.
- **Salas**: El cine tiene 3 salas disponibles: Sala A, Sala B y Sala C.
- **Horarios**: Las salas tienen los siguientes horarios: 3:00 PM, 5:00 PM y 7:00 PM.
- **Aforo**:
  - Sala A: 20 personas.
  - Sala B: 20 personas.
  - Sala C: 30 personas.
- **Funcionamiento**: El cine está abierto todos los días.

### Modelos

1. **Booker**: Representa a la persona que adquiere el boleto. Está relacionado con un booking.
2. **Booking**: Representa la agenda para una sala. Está relacionado con una sala, un horario y un asiento.
3. **Auditorium**: Representa cada sala en el cine. Tiene una cantidad de horarios disponibles y un número de asientos.
4. **Seat**: Representa un asiento numerado dentro de una sala. Está relacionado con un booker y pertenece a una sala.
5. **Movie**: Representa la película disponible.

### Casos de Uso

1. **Inicialización**: Configuración inicial de la aplicación con la información necesaria.
2. **Autenticación**: Implementar autenticación para el API utilizando JWT.
3. **Disponibilidad**: Endpoint para ver la disponibilidad de salas y horarios.
4. **Crear Booking**: Endpoint para crear un booking en la sala y horario elegido, especificando el asiento y el correo electrónico del booker. El usuario debe tener una cuenta para reservar.
5. **Confirmación de Booking**: Endpoint para consultar la confirmación del booking con detalles: correo electrónico, código de reserva, sala seleccionada, horario seleccionado y asiento seleccionado.
6. **Consultar Bookings**: Endpoint para consultar todos los bookings del usuario.

## Instalación

1. **Clonar el repositorio**

    ```bash
    git clone git@github.com:cesarsw-a11/cine-agenda-backend.git
    ```

2. **Instalar dependencias**

    ```bash
    cd cine-agenda-backend
    pnpm install (o el empaquedor de tu preferencia)
    ```

3. **Configurar el entorno**

    Crea un archivo `.env` y configura las variables de entorno necesarias, como las credenciales de la base de datos para llevar a cabo la conexión.

4. **Ejecutar la aplicación**

    ```bash
    pnpm run start:dev
    ```

## Estructura del Proyecto

- **src/**: Contiene todos los módulos de la aplicación.
  - **auth/**: Módulo de autenticación.
  - **bookings/**: Módulo para la gestión de reservas.
  - **auditoriums/**: Módulo para la gestión de salas.
  - **seats/**: Módulo para la gestión de asientos.
  - **movies/**: Módulo para la gestión de películas.
  - **booker/**: Módulo para la gestión de las personas que van agendar.
  - **prisma/**: Módulo para llevar a cabo la conexión a la base de datos mediante el ORM de prisma.

## Endpoints

### 1. **Autenticación**

- **POST /auth/login**: Inicia sesión y recibe un token JWT, el cual permitirá llevar a cabo la autenticacion de las rutas protegidas.
- **POST /auth/register**: Registra un nuevo usuario.

### 2. **Disponibilidad**

- **GET /auditoriums/availability**: Obtiene la disponibilidad de salas y horarios.

### 3. **Crear Booking**

- **POST /bookings**: Crea un nuevo booking. Requiere autenticación.

### 4. **Confirmación de Booking**

- **GET /bookings/:bookingId**: Obtiene la confirmación de un booking específico.

### 5. **Consultar Bookings**

- **GET /bookings/user**: Obtiene todos los bookings del usuario autenticado.

## Autenticación

Este proyecto utiliza JWT (JSON Web Token).
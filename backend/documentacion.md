

Estamos usando
	prisma
	swagger
	




Backend
	-- SEGURIDAD --
	módululo de login
	módulo de usuarios (CRUD)
	módulo de roles de usuario (CRUD)
	módulo de clientes
	-- GESTIÓN --
	tablero de control de producción de pedidos

Front end
	módulo de login
	módulo de pedido (CRUD)
	módulo de historial de pedidos
	módulo de aprobación del arte
	

src/
├── auth/                 # Login, JWT, Guards de roles
├── users/                # Gestión de usuarios y perfiles
├── roles/                # Definición de permisos
├── clients/              # Directorio de clientes
├── products/             # Precios base (por m2 o unidad)
├── orders/               # Lógica principal, cálculo de costos
├── production/           # Tablero de control (cambios de estado)
├── uploads/              # Manejo de archivos de arte (PDF/Imágenes)
└── common/               # DTOs globales, filtros de error e interceptores


src/
├── auth/
├── users/
│   ├── entities/
│   │   └── user.entity.ts       <-- Entidad de Usuarios
├── roles/
│   ├── entities/
│   │   └── role.entity.ts       <-- Entidad de Roles (Admin, Vendedor, etc.)
├── clients/
│   ├── entities/
│   │   └── client.entity.ts     <-- Entidad de Clientes
├── products/
│   ├── entities/
│   │   └── product.entity.ts    <-- Entidad de Productos (Pendón, Taza, etc.)
├── orders/
│   ├── entities/
│   │   ├── order.entity.ts      <-- Cabecera del pedido
│   │   └── order-item.entity.ts <-- Detalle del pedido (Cálculos de m2/unidades)

Variables
	Estados de pedido ("Recibido", "En Diseño", "Imprimiendo", "Acabados", "Listo para entrega")

	Filtros de Prioridad: Poder ordenar por fecha de entrega comprometida (Deadlines).nom


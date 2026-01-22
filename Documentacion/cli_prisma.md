# Comandos Prisma

## Instalacion
npm install prisma --save-dev
npm install @prisma/client

## Inicializacion
npx prisma init
npx prisma db pull (Sincroniza desde DB existente)

## Desarrollo
npx prisma migrate dev --name descripcion
npx prisma generate (Actualiza tipos TS)
npx prisma studio (Abrir GUI web)

## Datos y Limpieza
npx prisma db seed (Cargar datos iniciales)
npx prisma migrate reset (Borrar y reinstalar DB)
npx prisma db push (Sincronizar sin migraciones)

## Produccion
npx prisma migrate deploy


npm install @prisma/adapter-pg pg
nest generate service prisma
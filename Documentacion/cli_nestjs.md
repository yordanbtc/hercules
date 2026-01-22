# Comandos NestJS CLI

## Instalacion y Setup
npm install -g @nestjs/cli (Instala CLI globalmente)
nest new nombre-proyecto (Crea nuevo proyecto)

## Generacion de Recursos
nest generate module nombre (Genera un Modulo)
nest generate controller nombre (Genera un Controlador)
nest generate service nombre (Genera un Servicio)
nest generate resource nombre (Genera CRUD completo: recomendado)
nest generate class nombre (Genera clase plana)
nest generate interface nombre (Genera interfaz)
nest generate filter nombre (Genera filtro de excepciones)

## Ejecucion y Desarrollo
npm run start (Inicia la aplicacion)
npm run start:dev (Inicia con modo observador / hot reload)
npm run start:debug (Inicia en modo depuracion)

## Construccion y Produccion
npm run build (Compila a codigo Javascript en /dist)
node dist/main (Ejecuta la app compilada)

## Calidad de Codigo
npm run lint (Ejecuta linter para corregir formato)
npm run test (Ejecuta tests unitarios)
npm run test:cov (Genera reporte de cobertura de tests)
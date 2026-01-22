# Comandos Docker Compose

## Gestion de Contenedores
docker-compose up (Crea y levanta los contenedores)
docker-compose up -d (Levanta en segundo plano / modo detached)
docker-compose stop (Detiene los contenedores sin eliminarlos)
docker-compose start (Inicia contenedores detenidos)
docker-compose down (Detiene y elimina contenedores, redes e imagenes)
docker-compose down -v (Elimina tambien los volumenes de datos)

## Visualizacion y Logs
docker-compose ps (Lista el estado de los contenedores)
docker-compose logs (Muestra los logs de todos los servicios)
docker-compose logs -f (Sigue los logs en tiempo real)
docker-compose logs -f nombre-servicio (Logs de un servicio especifico)

## Ejecucion y Mantenimiento
docker-compose build (Construye o reconstruye las imagenes)
docker-compose pull (Descarga imagenes actualizadas de los servicios)
docker-compose restart (Reinicia los servicios)
docker-compose exec nombre-servicio sh (Entra a la terminal del contenedor)

## Limpieza
docker-compose rm (Elimina contenedores detenidos)
docker-compose pause (Pausa los procesos de los contenedores)
docker-compose unpause (Reanuda los procesos pausados)

## CREAR EL SDK

sudo docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/swagger.json -g typescript-axios -o /local/generated-sdk --skip-validate-spec

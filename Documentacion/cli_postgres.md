# Comandos PostgreSQL (CLI)

## Gestion del Servicio (Linux Mint)
sudo systemctl start postgresql    # Iniciar el servicio
sudo systemctl stop postgresql     # Detener el servicio
sudo systemctl restart postgresql  # Reiniciar el servicio
sudo systemctl status postgresql   # Ver estado del servicio

## Acceso y Seguridad
sudo -u postgres psql              # Entrar a la consola como superusuario
psql -U usuario -d base_de_datos   # Entrar con un usuario especifico
\q                                 # Salir de la consola psql

## Comandos dentro de PSQL (Meta-comandos)
\l                                 # Listar todas las bases de datos
\c nombre_db                       # Conectarse a una base de datos
\dt                                # Listar tablas de la DB actual
\d nombre_tabla                    # Ver estructura de una tabla
\du                                # Listar usuarios y roles
\dn                                # Listar esquemas

## Consultas Basicas (SQL)
CREATE DATABASE nombre;            # Crear nueva base de datos
DROP DATABASE nombre;              # Eliminar base de datos
CREATE USER usuario WITH PASSWORD 'pass'; # Crear usuario
GRANT ALL PRIVILEGES ON DATABASE db TO usuario; # Asignar permisos

## Backups y Restauracion (Terminal)
pg_dump -U user db > backup.sql    # Crear respaldo de una DB
psql -U user db < backup.sql       # Restaurar respaldo a una DB
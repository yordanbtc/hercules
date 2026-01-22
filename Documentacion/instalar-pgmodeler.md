Instalar pgModeler en Linux Mint es un poco diferente a otros programas, ya que el autor ofrece el código de forma gratuita pero cobra por el instalador ya compilado. Para tenerlo gratis, debemos compilarlo nosotros mismos.

No te preocupes, en Linux Mint es un proceso bastante directo si sigues estos pasos en la terminal.
Paso 1: Instalar las dependencias

Para compilar pgModeler, necesitas las herramientas de desarrollo de Qt y las librerías de PostgreSQL. Abre tu terminal y pega lo siguiente:
Bash

sudo apt update
sudo apt install build-essential libxml2-dev zlib1g-dev libpq-dev \
qt6-base-dev qt6-base-dev-tools qt6-tools-dev qt6-tools-dev-tools \
libqt6svg6-dev qt6-base-private-dev git

Paso 2: Clonar el código fuente

Ahora bajaremos la última versión estable desde su repositorio oficial en GitHub:
Bash

git clone https://github.com/pgmodeler/pgmodeler.git
cd pgmodeler

Paso 3: Configurar la compilación

Usaremos qmake (específicamente la versión para Qt6) para preparar el entorno. Este comando detectará tu sistema y creará los archivos necesarios:
Bash

qmake6 pgmodeler.pro

Paso 4: Compilar e Instalar

Este proceso puede tardar un par de minutos dependiendo de la potencia de tu procesador:
Bash

make -j$(nproc)
sudo make install

Paso 5: Crear un acceso directo (Opcional pero recomendado)

Por defecto, el binario se instala en /usr/local/bin/pgmodeler. Para que aparezca en tu menú de aplicaciones de Mint, puedes crear un lanzador rápido:

    Haz clic derecho en el escritorio o en el menú de inicio y selecciona "Configurar" o "Añadir nuevo lanzador".

    En el comando, escribe: pgmodeler

    En el nombre, pon: pgModeler

    Puedes descargar el icono oficial de su web para que se vea profesional.

¿Cómo verificar que funciona?

Una vez terminada la instalación, simplemente escribe en tu terminal: pgmodeler
Notas importantes:

    Errores de librerías: Si al ejecutarlo te dice que falta alguna librería .so, generalmente se soluciona ejecutando sudo ldconfig.

    Actualización: Si en el futuro sale una versión nueva, solo tienes que entrar a la carpeta donde lo clonaste, hacer un git pull y repetir los pasos de compilación.

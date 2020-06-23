# Desafío Front-end ZeroQ

Se me solicitó hacer esta prueba para postular al trabajo.

#### Probar visitando enlace

La aplicación está corriendo en AWS EC2, en una instancia donde tengo varios contenedores Docker.

Enlace: http://ec2-18-230-150-149.sa-east-1.compute.amazonaws.com:3025.

#### Probar con Docker

Para probar con Docker, correr `docker pull olivaresvjuanp/desafio-frontend-zeroq:0.1`, luego correr `docker run -p 3025:3025 olivaresvjuanp/desafio-frontend-zeroq:0.1`.

La aplicación estará expuesta en el siguiente enlace: http://localhost:3050.

Repositorio en Docker Hub: https://hub.docker.com/repository/docker/olivaresvjuanp/desafio-frontend-zeroq.

#### Probar clonando el repositorio

Hacer `git clone https://github.com/olivaresvjuanp/desafio-frontend-zeroq.git`, luego correr `yarn` para instalar las dependencias de la aplicación, y finalmente correr `yarn start` (se abrirá la aplicación en el navegador).

La aplicación estará expuesta en el siguiente enlace: http://localhost:3000.

#### Tecnologías que usé:
- React
- React Redux
- Redux
- Redux Thunk
- TypeScript
- Express
- Axios
- React Transition Group
- Moment
- Docker
- AWS

# Desafío

># Desafio Frontend Zeroq
>
>Zeroq esta en busca de un desarrollador frontend para unirse a su equipo de desarrollo, este desafío tiene la >finalidad de poner a prueba los conocimientos deseables para este puesto.
>
>El desafío consiste en consumir una API Restful, luego listar  las oficinas proporcionadas con algunos atributos.
>
>Se proporcionará, un mockup de como debe quedar el prototipo. Este es una version muy simple y reducida de nuestro >dashboard en tiempo real (https://zeroq.cl/command/) , y lo que queremos es validar que el concursante pueda >maquetar un diseño dado fielmente.
>
>## Restricciones
>
>1. Puede realizarse con cualquier framework de javascript o inclusive vanilla, pero prefeririamos que se realizace >con react.js ya que es el framework que usamos en todos nuestros front.
>
>2. Se puede usar cualquier librería
>
>## Lo que necesitaras
>
>#### Endpoint
>
>El único endpoint a consultar será:
>
>
> GET: https://boiling-mountain-49639.herokuapp.com/desafio-frontend
>
>#### Assets
>
>En la carpeta assets de este proyecto estarán las imagenes de guía y logotipo.
>
>Prototipo a realizar:
>
>![Prototipo](https://gitlab.com/hpichardo/desafio-frontend-zeroq/-/raw/master/assets/screens/index.png "prototipo")
>
>Leyenda de ayuda para conocer donde deben mostrarse los datos:
>
>![Leyenda](https://gitlab.com/hpichardo/desafio-frontend-zeroq/-/raw/master/assets/screens/legend.png "Leyenda")
>
>## Lo que debes realizar
>
>#### 1. Listar las oficinas proporcionadas en el endpoint.
>
>Cada oficina tiene un atributo `lines` y a su vez cada una de ellas tienen atributos `waiting` que son personas en >fila y `elapsed` que es el tiempo promedio de atención de esa fila en segundos.
>
>- Para obtener el total de personas en fila hay que sumar los `waiting` de las filas de una oficina.
>- Para obtener a atención promedio hay que promediar los `elapsed` (en segundos) de las filas de las oficinas y >mostrarlas en formato `HH:mm:ss`.
>
>#### 2. Agregar un campo de texto para filtrar oficinas por su nombre.
>El nombre se obtiene en el tributo `name` de cada oficina
>
>
>#### 3. Maquetar segun diseño entregado
>
>Se evalúa que el prototipo se parezca lo mas posible a los screens proporcionados.
>
>#### 4. Enviar repositorio con el prototipo
>
>Se debe enviar el repositorio con un readme donde se explique como construir, correr y testear la aplicación.
>
>## Bonus (Deseable)
>
>- Buenas prácticas de programación en javascript
>- Uso de TDD
>- Fidelidad al diseño proporcionado
>- Diseño Responsivo

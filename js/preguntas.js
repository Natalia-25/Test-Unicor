const PREGUNTA = {
    preguntas: [{
            pregunta: '¿Cuál de los siguientes es el Sistema Operativo que no maneja Interfaz Gráfica?',
            opciones: ['Mac OS', 'Windows', 'Unix', 'Windows XP'],
            correcta: 3,
            respondida: 0
        },
        {
            pregunta: '¿Cuál de los siguientes es una funcion del Sistema Operativo?',
            opciones: ['Organizar la informacion que se almacena en la computadora', 'Administrar los recuersos de la computadora', 'Ser una interfaz entre la computadora y el usuario', 'Todas las anteriores'],
            correcta: 4,
            respondida: 0
        },
        {
            pregunta: '¿Cuál es la configuración válida para la mayoría de los usuarios cuando se instala el sistema operativo?',
            opciones: ['Personalizada', 'Tipica', 'Avanzada', 'Regional'],
            correcta: 2,
            respondida: 0
        },
        {
            pregunta: '¿Cuando queramos desinstalar un programa del sistema?',
            opciones: ['Es indiferente la acción que elijamos Windows las interpreta por igual', 'Eliminaremos su carpeta de la carpeta "Archivos de programa" del disco local C:', 'Iremos al Panel de Control, Desinstalar un programa'],
            correcta: 3,
            respondida: 0
        },
        {
            pregunta: '¿Las carpetas las podemos crear en?',
            opciones: ['Discos', 'carpetas', 'Escritorio', 'Todas las anteriores'],
            correcta: 4,
            respondida: 0
        },
        {
            pregunta: '¿Que es un problema?',
            opciones: ['Un asunto el cual requiere ser resuelto', 'Una simple solucion de un caso', 'Un programa en C++', 'Una situacion'],
            correcta: 1,
            respondida: 0
        },
        {
            pregunta: '¿Qué es jQuery?',
            opciones: ['Una funcion Javascript para el manejo de eventos', 'Objeto que representa el documento Javascript', 'Una libreria Javascript con soporte multinavegador', 'Nada relacionado con Javascript'],
            correcta: 3,
            respondida: 0
        },
        {
            pregunta: '¿Que significa HTML?',
            opciones: ['HIGH TO MAIN LANGUAGE', 'Ninguna de las anteriores', 'HIT MAIL', 'HyperText Markup Language'],
            correcta: 4,
            respondida: 0
        },
        {
            pregunta: '¿Que es CSS?',
            opciones: ['Un lenguaje que describe la funcionalidad de una pagina web', 'Un lenguaje que describe los estilos de una pagina web', 'Una libreria', 'Nada'],
            correcta: 1,
            respondida: 0
        }

    ],

    pregunta_template: (numero) => {
        var template = '';

        template = `
                    <h3>Pregunta #${numero+1}</h3>
                    <p>${PREGUNTA.preguntas[numero].pregunta}</p>
                    <ul>`;

        PREGUNTA.preguntas[numero].opciones.forEach((opc, index) => {
            template += `
                        <li>
                            <input type="radio" name="opcion" value="${index+1}" id="opcion${index+1}">
                            <label for="opcion${index+1}">${opc}</label>
                        </li>
                        `;
        });


        template += `</ul> 
                `;
        return template;
    },

    panel_preguntas_template: () => {
        var template = `
                <h3>Panel de preguntas</h3>
                <ul>`;


        PREGUNTA.preguntas.forEach((pregunta, numero) => {
            if (pregunta.respondida != 0) {
                template += `<li class="${pregunta.respondida == pregunta.correcta?"correcto":"erronea"}">Pregunta #${numero+1}</li>`;
            } else {
                template += `<li >Pregunta #${numero+1}</li>`;
            }

        });

        var preguntas_resueltas = PREGUNTA.preguntas.filter(p => p.respondida != 0);

        template += `  
                </ul>
                <div class="progreso">
                    <span style="width: max-content; margin-right:5px;"><b>${preguntas_resueltas.length} de ${PREGUNTA.preguntas.length}</b></span>
                    <div class="barra" style="width:${PREGUNTA.porcentaje_barra(PREGUNTA.preguntas.length,preguntas_resueltas.length)}%"></div>
                </div>`;

        return template;
    },

    finalizar_prueba: () => {
        var template = '';

        PREGUNTA.preguntas.forEach((pregunta, numero) => {
            template += `<h3>Pregunta #${numero+1}</h3>
                        <p>${pregunta.pregunta}</p>
                        <ul>
                            <li>
                                <p style="color:green;"><b>Correcta: </b>${pregunta.opciones[pregunta.correcta-1]}</p>
                            </li>
                            <li>
                                <p><b>Marcada: </b>${pregunta.opciones[pregunta.respondida-1]}</p>
                            </li>
                        </ul>
                        `;
        });


        return template;
    },

    porcentaje_barra: (total, valor_actual) => {
        return valor_actual * 70 / total;
    }
}
const btnLogin = $('#btnLogin');
const btnSalir = $('#btnSalir');
const btnAnterior = $('#btnAnterior');
const btnSiguiente = $('#btnSiguiente');
const btnFinalizar = $('#btnFinalizar');
const txtNombres = $('#txtNombres');
const txtApellidos = $('#txtApellidos');
const nombreUsuario = $('#txtNombreUsuario');
const panelPreguntas = $('#panelPreguntas');
const panelPregunta = $('.pregunta');
var numero_pregunta = 0;

$('.login').show();
$('nav').hide();
$('.principal').hide();


btnLogin.click((e) => {

    e.preventDefault();

    var logueado = LOGIN.login(txtNombres, txtApellidos);

    if (logueado) {
        cargar_vista_principal();
    } else {
        alert("Los campos son obligatorios para acceder");
    }
});

btnSalir.click(() => {
    location.reload();
});

btnAnterior.click(() => {
    var opcion = $('input[name="opcion"]:checked').val();

    if (opcion != undefined) {
        PREGUNTA.preguntas[numero_pregunta--].respondida = opcion;
        panelPreguntas.html(PREGUNTA.panel_preguntas_template());
    }

    panelPregunta.html(PREGUNTA.pregunta_template(numero_pregunta));
    if (numero_pregunta == 0) {
        btnAnterior.attr('disabled', 'disabled');
    } else if (numero_pregunta == PREGUNTA.preguntas.length - 2) {
        btnSiguiente.show();
        btnSiguiente.removeAttr('disabled');
        btnFinalizar.hide();
    }
});

btnSiguiente.click(() => {

    var opcion = $('input[name="opcion"]:checked').val();
    console.log(opcion)

    if (opcion != undefined) {
        PREGUNTA.preguntas[numero_pregunta++].respondida = opcion;
        panelPreguntas.html(PREGUNTA.panel_preguntas_template());
    }

    panelPregunta.html(PREGUNTA.pregunta_template(numero_pregunta));

    if (numero_pregunta == PREGUNTA.preguntas.length - 1) {
        btnSiguiente.hide();
        btnFinalizar.show();
    } else if (numero_pregunta == 1) {
        btnAnterior.removeAttr('disabled');
    }

});

btnFinalizar.click(() => {
    panelPregunta.html(PREGUNTA.finalizar_prueba())
})

function cargar_vista_principal() {
    $('.login').hide();
    $('nav').show();
    $('.principal').show();
    btnFinalizar.hide();

    nombreUsuario.html(LOGIN.nombres + ' ' + LOGIN.apellidos);

    panelPreguntas.html(PREGUNTA.panel_preguntas_template());
    panelPregunta.html(PREGUNTA.pregunta_template(numero_pregunta));
    btnAnterior.attr('disabled', 'disabled');
}
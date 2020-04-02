const LOGIN = {

    nombres: 'NONE',
    apellidos: 'NONE',

    login: (_nombres, _apellidos) => {
        LOGIN.nombres = _nombres.val();
        LOGIN.apellidos = _apellidos.val();

        if (LOGIN.nombres && LOGIN.apellidos && LOGIN.nombres.length > 0 && LOGIN.apellidos.length > 0) {
            return true;
        } else {
            return false;
        }
    }

}
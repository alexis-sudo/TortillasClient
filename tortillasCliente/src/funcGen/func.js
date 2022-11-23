import swal from "sweetalert";

export const createDate = () => {
    const now = new Date();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return `${dias[now.getDay()]} ${now.getDate()} de ${meses[now.getMonth()]}`;
}

export const isLoged = () => {
    if (localStorage.getItem('Tsession') === null) {
        window.location.href = '/logIn';
    }
}

export const logOut = () => {
    swal({
        text: "Deseas Cerrar Session",
        icon: "warning",
        dangerMode: true,
        buttons: true,
    }).then((result) => {
        if (result) {
            localStorage.removeItem('Tsession');
            window.location.reload();
        }
    });
}

export const ll = () => {
    console.log('expert')
}


export const validateTiempo = () => {
    let today = new Date();
    return today.getHours() < 12?'Almuerzo':'Cena';
}

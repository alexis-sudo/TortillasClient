import { useState } from "react";
import db from '../client';
import { getDocs, collection } from "firebase/firestore";
import swal from "sweetalert";
import './LogIn.css';

export default function LogIn() {
    const [user, setUser] = useState("");
    const [contra, setContra] = useState("");

    const saveSession = (pUser, pDirection, pUserId) => {
        if (localStorage.getItem('Tsession') === null) {
            let Tsession = {
                user: pUser,
                direction: pDirection,
                userId: pUserId
            };
            localStorage.setItem('Tsession', JSON.stringify(Tsession));
        }
        else {
            let Tsession = JSON.parse(localStorage.getItem('Tsession'));
            Tsession.user = pUser;
            Tsession.direction = pDirection;
            Tsession.userId = pUserId;
            localStorage.setItem('Tsession', JSON.stringify(Tsession));
        }
    }

    const seachUser = async (pUser, pContra) => {
        try {
            let isOn = false;
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                const { user, contra, direction } = doc.data();
                const userId = doc.id;
                if (user === pUser & contra === pContra) {
                    isOn = true;
                    saveSession(user, direction, userId);
                }
            });
            if (isOn === true) {
                swal({
                    text: "Has Iniciado Session Correctamente",
                    icon: "success",
                    buttons: {
                        confirm: true,
                    },
                }).then(() => {
                    window.location.href = '/'
                });
            } else {
                swal({
                    text: "Datos incorrectos, Intenta de nuevo",
                    icon: "error",
                    buttons: {
                        confirm: true,
                    },
                });
            }

        } catch (e) {
            console.log(e);
        }
    }

    const handleUserChange = ({ target }) => setUser(target.value);
    const handleContraChange = ({ target }) => setContra(target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (user !== "" & contra !== "") {
            seachUser(user, contra);
        } else {
            swal({
                text: "Todos los campos son requeridos.",
                icon: "warning",
                buttons: {
                    confirm: true,
                },
            });
        }
    }

    return (
        /*al div le quite el vh-100 porque estaba agregando espacio en banco*/
        <div className=" d-flex justify-content-center pt-5">
            <div className="triOne"></div>
            <div className="lineOne"></div>
            <form className="col-10 col-sm-8 col-md-6 col-lg-4 pos h-auto" onSubmit={handleFormSubmit}>
                <h2 className="mb-4 mt-5 d-flex justify-content-center font-weight-bold"><b>Bienvenid@ a TortillasApp</b></h2>
                <label className="form-label">Usuario:</label>
                <input className="form-control" value={user} onChange={handleUserChange} type='text' />
                {/* <br/> */}
                <label className="form-label mt-2">Contraseña:</label>
                <input className="form-control" value={contra} onChange={handleContraChange} type='password' />
                <br />
                <input className="btn bg-success text-white d-block w-100" value='Iniciar Session' type='submit' />
            </form>
            <div className="triTwo"></div>
            <div className="lineTwo"></div>
        </div>
    );
}
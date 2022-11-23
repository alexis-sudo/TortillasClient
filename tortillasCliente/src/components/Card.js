import { faCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({order}){
    const decideStatus =(estatus)=>{
        if(estatus === 'Recibido'){
            return "statusYellow"
        }
        else if(estatus === 'Completado'){
            return "statusGreen"
        }
        else if(estatus === 'Rechazado'){
            return "statusRed"
        }
        else if(estatus === "Registrado"){
            return 'statusNone'
        }
        else if(estatus === "Pagado"){
            return "statusPagado"
        }
    }
    return(
        <div className="col-sm-12 col-md-12 col-lg-6 card  mb-3">
            {/* card body */}
            <div className="card-body bg-custom-card">
                <header className="d-flex ">
                    <div className="w-17">
                        <span className={decideStatus(order.estate)} ><FontAwesomeIcon icon={faCircle}/></span>
                    </div>
                    <div className="w-63 d-flex justify-content-center">
                        <span className="ms-2 fw-bold">{order.date}</span>
                    </div>
                    <div className="w-20 d-flex justify-content-center">
                        <span className="fw-bold"> {order.amount} $</span>
                    </div>
                </header>
                <hr/>
                <p><span className="fw-bold">Tiempo:</span>  {order.turn}</p>
                <p><span className="fw-bold">Estado:</span>  {order.estate}</p>
            </div>
        </div>
    );
}
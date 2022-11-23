import './NavDown.css';
import { Link, useLocation } from 'react-router-dom';
import { faUserCog,faFileInvoiceDollar,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavDown(){
    const {pathname} = useLocation();
    const place = path =>{
        return pathname==path?"activ ziseIcons":"text-white ziseIcons";
    }
    
    return (
        <div className={ pathname =="/logIn"? "invisible" : "w-100 down d-flex bg-custom"}>
            <div className='col d-flex justify-content-center align-items-center'>
                <Link to="/"><FontAwesomeIcon icon={faPaperPlane} className={place("/")}/></Link>
            </div>
            <div className=' col d-flex justify-content-center align-items-center'>
                <Link to="/deudas"><FontAwesomeIcon icon={faFileInvoiceDollar} className={place("/deudas") }/></Link>
            </div>
            <div className=' col d-flex justify-content-center align-items-center'>
                <Link to="/user"><FontAwesomeIcon icon={faUserCog} className={place("/user")}/></Link>
            </div>
        </div>
    );
};
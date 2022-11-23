import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <>
            <div className="w-100 up d-flex bg-custom2">
                <div className="col d-flex ">
                    <h2 className="ps-4 pt-4 text-white" >{JSON.parse(localStorage.getItem('Tsession')).user}</h2>
                    <Link to="/" ><FontAwesomeIcon className='customFace size mt-4 ms-3' icon={faSmileWink}/></Link>
                    
                </div>
            </div>
        </>
    );
}
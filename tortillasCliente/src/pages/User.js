import Header from '../components/Header';
import "./User.css";
import { logOut, isLoged } from '../funcGen/func';
import { doc,getDoc } from 'firebase/firestore';
import db from "../client";
import { useEffect, useState } from 'react';

export default function User(){
    isLoged();
    const [myUser,setMyUser] = useState({});
    
    const getMyUser = async(Id)=>{
        try{
            const obj = await getDoc(doc(db, "users", Id));
            setMyUser(obj.data());
        }catch(e){
            console.log(e)
        }
    };

    useEffect(()=>{
        getMyUser(JSON.parse(localStorage.getItem('Tsession')).userId);
    },[]);

    return(
        <>
            <Header/>
            <div className='w-100 d-flex justify-content-center cimg'>
                <img className='img-profile shadow' src='https://firebasestorage.googleapis.com/v0/b/pedidos-d769c.appspot.com/o/user.png?alt=media&token=98329f5c-9ef2-46d1-a266-93b5f8459da5'/>
            </div>
            <div className='w-100 d-flex justify-content-center mt-3 color'>
                <h2>{myUser.fullName}</h2>
            </div>
            <div className='px-4 mt-4 '>
                
                <p>
                    <strong>User:</strong> {myUser.user}
                </p>
                <p>
                    <strong>Cel:</strong> {myUser.phone}
                </p>
                <p>
                    <strong>Direccion:</strong> {myUser.direction}
                </p>
                {/* <p>
                    <strong>Deuda:</strong> 3.80 $
                </p> */}
                <button className='btn btn-danger w-100 mt-3' onClick={logOut}>Cerrar Session</button>
            </div>
        </>
    )
}
import Header from "../components/Header";
import Card from "../components/Card";
import db from "../client";
import { onSnapshot, collection,query,orderBy } from "firebase/firestore";
import { useState,useEffect } from "react";
import { isLoged } from "../funcGen/func";
import "./Deudas.css"

export default function Deudas(){
    isLoged();
    const [ordersNoPay,setOrdersNoPay] = useState([]);
    const [deuda,setDeuda] = useState(0);
    const [debito,setDebito] = useState(0);

    const getMyOrdersNoPay =()=>{
        try{
            const userId = JSON.parse(localStorage.getItem('Tsession')).userId;
            onSnapshot(query(collection(db, "orders"), orderBy("oDate", "desc")),(querySnapshot => {
                const orderData = [];
                let counterDeuda = 0;
                let counterDebito = 0;
                querySnapshot.forEach((doc) => {
                    if(doc.data().userId == userId && (doc.data().estate == "Recibido" || doc.data().estate == "Pagado" )){
                        orderData.push({...doc.data(), id:doc.id});

                        doc.data().estate=="Recibido"?
                        counterDeuda += parseFloat(doc.data().amount):
                        counterDebito += parseFloat(doc.data().amount);
                    } 
                });
                setOrdersNoPay(orderData);
                setDeuda(counterDeuda);
                setDebito(counterDebito);
            }));
        }catch(e){
            console.log(e)
        }
    };

    useEffect(()=>{
        getMyOrdersNoPay();
    },[]);
    
    return(
        <>
            <Header title="Cuentas $"/>
            <div className="container">
                <div className="d-flex btnDeudas">
                    <div className="col d-flex justify-content-center">
                        <p className="btn btn-success"><strong>Debito:</strong> {parseFloat(debito).toFixed(2)}</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="btn btn-danger"><strong>Deuda:</strong> {parseFloat(deuda).toFixed(2)}</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 pb-5">
                    {ordersNoPay.map(order=>{
                        return <Card order={order} key={order.id}/>
                    })}
                </div>
            </div>
        </>
    )
}
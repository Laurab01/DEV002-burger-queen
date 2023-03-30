import React from "react";
import './Order.scss';
import { useState, useEffect } from "react";
import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../Firebase/fb-config";
import logoPizza from "../Images/Logo.png";
const Order = () => {
    const [ordersData, setOrdersData] = useState([]);
    // console.log(ordersData, 'coleccion')
    useEffect(() => {
      const getData = async () => {
        onSnapshot(query(collection(db, 'pedidos')), (querySnapshot) => {
          let orders = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data();
            data.id = doc.id;
            orders.push(data);
          });
          setOrdersData(orders);
        })
      }
      getData()
    }, []);

    return(
    <>
    <section className='sect-order'>
        <header className='order-header'>
        <img className="logo" src={logoPizza} alt='logo' />
                <a href='/' className="home"><h1>INICIO</h1></a>
                <hr></hr>
                <a href='/menu' className="menu"><h1>NUEVA ORDEN</h1></a>
          </header>
          </section> 
    </>
    )
}
export default Order;
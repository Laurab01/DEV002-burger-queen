import { useEffect, useState } from "react";
import logoPizza from "../Images/Logo.png";
import './Menu.scss'
import axios from "axios";
import AddProducts from "./AddProducts";
import OrderSummary from "./OrderSummary";
import AddToCart from "./AddToCart";

const Menu = () => {
    const [data, setData] = useState([]);
    const [addToOrder, setAddToOrder] = useState([]);
    const [person, setPerson] = useState('')
    const [table, setTable] = useState('Mesa');

    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setData(res.products)
            })
    }, [])

    const onCustomerName = (event) => {
        setPerson(event.target.value);
    }
    const onTableSelect = (event) => {
        setTable(
            event.target.value
        );
    }

    return (
        <>
            <header>
                <img className="logo" src={logoPizza} alt='logo' />
                <a href='/' className="home"><h1>INICIO</h1></a>
                <hr></hr>
                <a href='/order' className="order"><h1>PEDIDOS</h1></a>
            </header>
            <div className='sect-input'>
                <input
                    type='text'
                    placeholder='Nombre del cliente'
                    className='inputName'
                    onChange={onCustomerName}
                />
                <select
                    className='numTable'
                    onChange={onTableSelect}
                >
                    <option disabled value='Mesa'>Mesa</option>
                    <option value='Mesa1'>Mesa 1</option>
                    <option value='Mesa2'>Mesa 2</option>
                    <option value='Mesa3'>Mesa 3</option>
                    <option value='Mesa4'>Mesa 4</option>
                    <option value='Mesa5'>Mesa 5</option>
                </select>
            </div>
            <section className="sect-menu">
                <h2>MENU PRINCIPAL</h2>
                <h3 className="pizza">PIZZAS</h3>
                <section className="foodContainer">
                    {data.filter(product => product.category.includes("Comidas")).map(items => (
                        <div key={items.id} className="card-container">
                            <img src={items.img} alt='' className="imgMenu" />
                            <p className="">{items.name}</p>
                            <p>${items.price}</p>
                            <AddProducts
                                dataProduct={items}
                                addOrder={addToOrder}
                                setAddOrder={setAddToOrder}
                                personName={person}
                            />
                        </div>
                    )
                    )
                    }
                </section>
                <h3 className="drink">BEBIDAS</h3>
                <section className="drinkContainer">
                    {data.filter(product => product.category.includes("Bebidas")).map(items => (
                        <div key={items.id} className="card-container">
                            <img src={items.img} alt='' className="imgMenu" />
                            <p>{items.name}</p>
                            <p>${items.price}</p>
                            <AddProducts
                                dataProduct={items}
                                addOrder={addToOrder}
                                setAddOrder={setAddToOrder}
                                personName={person}
                            />
                        </div>
                    ))}
                </section>
                <div className='order-summary'>
                    <OrderSummary
                        addOrder={addToOrder}
                        setAddOrder={setAddToOrder}
                    />
                </div>
                <AddToCart
                    addOrder={addToOrder}
                    tableSelect={table}
                    personName={person}
                />
            </section>
            <footer>© 2023 Created by Laura Buitrago</footer>
        </>
    )
}
export default Menu;

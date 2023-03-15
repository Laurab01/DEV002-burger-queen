import React from "react";
import logoPizza from "../Images/Logo.png";
import './Menu.css'

const Menu = () => {
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
                />
                <select className='numTable'>
                    <option disabled selected>Mesa</option>
                    <option value='Mesa1'>Mesa 1</option>
                    <option value='Mesa2'>Mesa 2</option>
                    <option value='Mesa3'>Mesa 3</option>
                    <option value='Mesa4'>Mesa 4</option>
                    <option value='Mesa5'>Mesa 5</option>
                </select>
            </div>

            <footer>© 2023 Created by Laura Buitrago</footer>
        </>
    )
}
export default Menu;
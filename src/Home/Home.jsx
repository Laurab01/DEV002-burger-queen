import React, { Fragment } from "react";
import logo from "../Images/Logo.png";
import waiter from "../Images/mesero.png";
import chef from "../Images/cocina.png";
import './Home.scss';

const Home = () => {
    return(
    <>
        <main className="principal">
    <section>
    <h1> <img className="logoHome" src={logo} alt='Logo Pizzalicious' />
    </h1>
    </section>
    <nav className='options'>
        <section>
          <a href='/menu'><img className='btn-menu' src={waiter} alt='Menú' /></a>
          <h3 className="waiterChef">MESERO</h3>
        </section>
        <section>
          <a href='/chef'><img className='btn-chef' src={chef} alt='Chef' /></a>
          <h3>CHEF</h3>
        </section>
      </nav>
    </main>
    <footer>© 2023 Created by Laura Buitrago</footer>
    </>
    ) 
}
export default Home;
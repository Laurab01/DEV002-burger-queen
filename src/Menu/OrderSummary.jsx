import React from "react";
import Swal from "sweetalert2";
import './Menu.scss'

const OrderSummary = ({ addOrder, setAddOrder }) => {

    const priceProducts = addOrder.map(product => {
        /* Valida el producto y suma las cantidades*/
        if (product.price !== undefined) {
            return product.price * product.amount;
        }
        return 0;
    })
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    const deleteOrder = () => {
        Swal.fire({
            title: '¿Estás seguro de eliminar el pedido?',
            icon: 'warning',
            color:'black',
            background: '#818181',
            showCancelButton: true,
            confirmButtonColor: '#5800FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload(false);
                setAddOrder([]);

            }
        })
    }

    return (
        <>
            <section className="summary">
                <h3>Resumen de pedido</h3>
                {addOrder.map(product =>
                    <div key={product.id} >
                        <section className='product-summary'>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                            <p>$ {product.price !== undefined ? product.price * product.amount : ''}</p>
                        </section>
                    </div>
                )}
                <div className='total-order-price'>
                    <h4>Total $ {totalOrderPrice}</h4>
                </div>
                <section className='delete-order'>
                    <button
                        className='btn-delete-order'
                        onClick={() => {
                            deleteOrder()
                        }}
                    >
                        Cancelar
                    </button>
                </section>
            </section>
        </>
    )

}

export default OrderSummary;

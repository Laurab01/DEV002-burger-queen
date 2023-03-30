import { db } from "../Firebase/fb-config"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import './Menu.scss'

const AddToCart = ({ addOrder, personName, tableSelect }) => {
    const uploadOrder = async () => {
       await addDoc(collection(db, "pedidos"),
            { ...addOrder, personName, tableSelect, state: 'Enviar a cocina', date: new Date() }
        )
    }
    const savedOrderAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido enviado',
            showConfirmButton: false,
            timer: 2500
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.reload(false)
            }
        })
    }

    const createOrder = () => {
        savedOrderAlert();
        uploadOrder();
    }
    
    const validateInputName = () => {
        if (personName === '' || tableSelect === 'Mesa') {
            Swal.fire({
                title: '<strong>Por favor rellena nombre y mesa</strong>',
                icon: 'info'
            })
        } else if (addOrder.length === 0) {
            Swal.fire({
                title: '<strong>Por favor agrega un producto</strong>',
                icon: 'error'
            })
        }
        else {
            createOrder()
        }
    }
    return (
        <>
            <section className='save-order'>
                <button
                    className='btn-save-order'
                    onClick={() => {
                        validateInputName()
                    }}
                >
                    Enviar a cocina
                </button>
            </section>
        </>
    )
}

export default AddToCart

import React from "react";

const OrderProgress = ({ orderObject }) => {

    const timeInKitchen = () => {
        if (orderObject.finalTime && orderObject.startTime !== undefined) {
            let diffTime = orderObject.finalTime.seconds - orderObject.startTime.seconds;
            let minutes = Math.floor(((diffTime * 1000) / (1000 * 60)) % 60),
                hours = Math.floor(((diffTime * 1000) / ((1000 * 60 * 60)) % 24));

            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;

            return hours + ' h ' + minutes + ' m';
        }
    }

    return (
        <>
            {orderObject.state === 'En preparación'
                ? <div className='container-progress-bar'>
                    <p>{orderObject.state}</p>
                </div>
                : ''
            }
            {orderObject.state === 'Para entregar'
                ?
                <section>
                    <div className='time-kitchen'>
                        <p>Tiempo: {timeInKitchen()}</p>
                    </div>
                    <div className='container-progress-bar'>
                        <p>{orderObject.state}</p>
                    </div>
                </section>
                : ''
            }

        </>
    )
};

export default OrderProgress;

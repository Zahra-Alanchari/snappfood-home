import Image from 'next/image';
import React from 'react';
import order from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.05.37.png"

const Order = () => {
    return (
        <div>
            <span>سفارش ها</span>
            <Image src={order} alt="order"/>
        </div>
    );
};

export default Order;
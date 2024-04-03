import {useState} from "react";
import type { OrderItem, MenuItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item : MenuItem) => {
      const itemExist = order.findIndex( orderItem => orderItem.id === item.id);
    if(itemExist >= 0) {
        order[itemExist].quantity = order[itemExist].quantity + 1
        setOrder([...order])
    } else {
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
}

    const removeItem = (id : MenuItem['id']) => {
        const removingItem = order.filter(orderItem => orderItem.id !== id)
        setOrder(removingItem)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
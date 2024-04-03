import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void 
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalProps) {
    const total = order.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const tipAmount = useMemo(() => tip * total, [tip, total])
    const totalAmount = useMemo(() => total + tipAmount, [tipAmount, total])
    return (
  <>
    <div className="space-y-3">
        <p className=" font-black text-2xl">
        Subtotal: {formatCurrency(total)} 
        </p>
        <p className=" font-black text-2xl">
        Tip: {formatCurrency(tipAmount)} 
        </p>
        <p className=" font-black text-3xl">
        Total to pay: {formatCurrency(totalAmount)} 
        </p>
    </div>
    <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
    >
        Save order
    </button></>
  )
}

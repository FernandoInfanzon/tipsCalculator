import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id : MenuItem['id']) => void 
}

export default function OrderContent({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className="text-4xl font-black">Total dining</h2>
        {order.length === 0 ?
        <p className=" text-center font-black pt-8">Order Empty</p>    :
        order.map(item => {
            return (
                <div className="space-y-3 mt-5 flex justify-between border-t border-gray-200 last-of-type:border-b items-center" key={item.id}>
                   <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Quantity: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                        </p>
                   </div>
                   <button className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                   onClick={() => removeItem(item.id)}
                   >
                    X
                   </button>
                </div>
            ) 
        })}

    </div>
  )
}

import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipPercentajeForm from "./components/TipPercentajeForm"
import { menuItems, menuDrinks, menuDessert } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
   <>
      <header className="bg-customNeon py-5">
        <h1 className="text-center text-4xl font-black">Tip and Expense Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
          {menuItems.map((item) => {
            return (
              <MenuItem 
                key={item.id} 
                item={item}
                addItem={addItem}
                />
            )
          })}
          </div>
          <h3 className="text-4xl font-black">Drinks</h3>
          <div className="space-y-3 mt-10">
          {menuDrinks.map((item) => {
            return (
              <MenuItem 
                key={item.id} 
                item={item}
                addItem={addItem}
                />
            )
          })}
          </div>
          <h2 className="text-4xl font-black">Desserts</h2>
          <div className="space-y-3 mt-10">
          {menuDessert.map((item) => {
            return (
              <MenuItem 
                key={item.id} 
                item={item}
                addItem={addItem}
                />
            )
          })}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length > 0 ? (
              <>
               <OrderContent order={order} removeItem={removeItem}/> 
              <TipPercentajeForm setTip={setTip} tip={tip}/>
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/> 
              </>
            ) : (
              <p className="text-center text-2xl font-bold">Empty Order</p>
            )
          } 
        </div>
      </main>
   </>
  )
}

export default App

import type { MenuItem } from "../types";

type MenuItemProps = {
    item : MenuItem,
    addItem: (item : MenuItem) => void
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <button className="border-2 border-customNeon hover:bg-customNeon w-full p-3 flex justify-between"
    onClick={()=> addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem;


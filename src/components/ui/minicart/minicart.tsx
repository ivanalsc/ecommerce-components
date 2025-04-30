"use client"

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer"
import { ShoppingCart } from "lucide-react"
import { Button } from "../button/button"
import { useCartStore } from "@/lib/stores/cart"

export function MiniCart() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const clearCart = useCartStore((state) => state.clearCart)
  const isEmpty = items.length === 0

  const fallbackItems = [
    {
      id: 0,
      title: "Demo Sneakers",
      price: 79.99,
      quantity: 1,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Demo Backpack",
      price: 59.99,
      quantity: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1528384389982-64b0c3dbc32f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const visibleItems = isEmpty ? fallbackItems : items
const subtotalFromStore = useCartStore((state) => state.getSubtotal())
const subtotal = isEmpty ? "$199.97" : subtotalFromStore


  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="icon" aria-label="Open cart">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-4 flex flex-col justify-between h-full bg-white shadow-xl">
        <div className="overflow-y-auto space-y-4">
          <DrawerHeader>
            <DrawerTitle className="text-lg">Your Cart</DrawerTitle>
          </DrawerHeader>

          <div className="divide-y divide-gray-200">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="py-2 flex items-center justify-between gap-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-16 w-16 rounded object-cover border"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  {!isEmpty && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-2 text-sm flex justify-between font-medium">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>

          {!isEmpty && (
            <div className="pt-2 text-right">
              <button
                onClick={clearCart}
                className="text-xs text-red-500 hover:underline"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        <DrawerFooter>
          <Button variant="secondary">View Cart</Button>
          <Button disabled={isEmpty}>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

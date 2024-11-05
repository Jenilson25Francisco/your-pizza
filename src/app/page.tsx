"use client"

import { useEffect, useState } from "react";
import { CartButton } from "@/components/cart-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MenuItems } from "@/components/menu-items";
import { DataProducts } from "@/data/products";
import type { Product } from "@/types/producttype";

type Cartitem = Product & {
  quantity: number
}

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Cartitem[]>([])

  useEffect(() => {
    setProducts(DataProducts)
  }, [])

  function addToCart(id: number) {
    const product = products.find((prod: Product) => prod.id === id)
    if (!product) { return }
    const existingProduct = cart.find(item => item.id)
    let updateCart: Cartitem[]
    if (existingProduct) {
      updateCart = cart.map(item => item.id ? { ...item, quantity: item.quantity + 1 } : item)
    } else {
      updateCart = [...cart, { ...product, quantity: 1 }]
    }
    setCart(updateCart)
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }



  return (
    <div className="mt-80">
      <Header />
      <CartButton itemCount={cart.length} />
      <div className="p-4">
        <h1 className="font-bold text-center tex-2xl">O nosso cardápio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
          {products.map(product => (
            <MenuItems
              key={product.id}
              title={product.nome}
              id={product.id}
              addToCart={addToCart}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

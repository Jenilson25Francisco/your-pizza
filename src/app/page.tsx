"use client"

import { CartButton } from "@/components/cart-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MenuItems } from "@/components/menu-items";
import { DataProducts } from "@/data/products";
import type { Product } from "@/types/producttype";
import { useEffect, useState } from "react";

type Cartitem = Product & {
  quantity: number
}

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Cartitem[]>([])

  function addToCart() { }

  useEffect(() => {
    setProducts(DataProducts)
  }, [])

  return (
    <div className="mt-80">
      <Header />
      <CartButton />
      <div className="p-4">
        <h1 className="font-bold text-center tex-2xl">O nosso cardápio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
          {products.map(product => (
            <MenuItems
              key={product.id}
              title={product.nome}
              id={product.id}
              addCart={addToCart}
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

"use server"
import { Products } from "@/typing"
import { revalidateTag } from "next/cache"

export const handleDatabaseUpdate = async (e: FormData) => {
    const product = e.get('product')?.toString()
    const price = e.get('price')?.toString()

    if (!product || !price) return

    const newProduct: Products = {
      product,
      price,
    };
    await fetch('https://6759d491099e3090dbe31051.mockapi.io/products',
      {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers:
        {
          'Content-Type': 'application/json'
        }
      },
    )
    revalidateTag('products')
  }
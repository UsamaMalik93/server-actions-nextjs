import { handleDatabaseUpdate } from "@/actions";
import { Products } from "@/typing";
import AddProductBtn from "./components/AddProductBtn";

export default async function Home() {
  const response = fetch('https://6759d491099e3090dbe31051.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products']
      }
    }
  )
  const products: Products[] = await (await response).json()

  return (
    <>
      <div className="font-bold text-3xl text-center pt-5">Product Warehouse</div>
      <AddProductBtn/>
      <form action={handleDatabaseUpdate} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          name='product'
          placeholder="Enter Product Name"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name='price'
          placeholder="Enter Product Price"
          className="border border-gray-300 p-2 rounded-md"
        />
        {/**handleComment can be another server action */}
        {/* <input name='comment' formAction={handleComment}/> */}
        <button className="bg-blue-500 p-2 rounded-sm text-white">Add Product</button>
      </form>
      <h2 className="text-2xl text-center text-gray-500 my-5">
        Products List
      </h2>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow-lg">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

    </>
  );
}

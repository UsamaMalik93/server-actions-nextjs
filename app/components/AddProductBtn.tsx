"use client"
import { handleDatabaseUpdate } from "@/actions"
import { useTransition } from "react"

const AddProductBtn = () => {
    const [isPending, startTransition] = useTransition()

    const formData = new FormData()
    formData.append('product', "Macbook Pro M1")
    formData.append('price', '$1250.50')

    return (
        <button onClick={() => startTransition(() => { handleDatabaseUpdate(formData) })}
            className="fixed bottom-10 right-10 bg-green-600 text-white rounded-md p-2">
            {isPending ? "Adding..." : "Add Macbook Pro M1"}
        </button>
    )
}

export default AddProductBtn

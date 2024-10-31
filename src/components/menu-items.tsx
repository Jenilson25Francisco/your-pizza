import { IconPlus } from "@tabler/icons-react"
import Image from "next/image"

type MenuItemsProps = {
    id: number
    title: string
    price: number
    image: string
    addCart: (id: number) => void
}

export const MenuItems = ({ title, price, image, id, addCart }: MenuItemsProps) => {
    return (
        <div className="flex items-center space-x-4 p-4 border-b hover:bg-zinc-200 duration-75 transition-colors">
            <Image src={image} width={117} height={117} alt={title} className="rounded-md hover:-rotate-2 duration-300 hover:scale-110" />
            <div className="flex-1 cursor-pointer">
                <h2 className="font-bold text-zinc-800">{title}</h2>
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-gray-500">{price.toFixed(2)}</p>
                    <button
                        className="flex items-center gap-1 bg-emerald-500 rounded-md px-2 py-4 text-sm text-black border border-zinc-300 sm:w-[100px] h-[100] mx-auto"
                        type="button"
                    >
                        <IconPlus className="text-zinc-700 size-4" stroke={2} />
                        Adicionar ao Carinho
                    </button>
                </div>
            </div>
        </div>
    )
}
import { IconShoppingCartCopy } from "@tabler/icons-react"
import Link from "next/link"

export const CartButton = () => {
    return (
        <Link href="/cart">
            <div className="mt-8 fixed z-40 top-0 p-3 bg-transparent">
                <div className="flex justify-center p-4">
                    <IconShoppingCartCopy className="text-zinc-50 size-10" stroke={2} />
                    <div
                        className="flex items-center justify-center border-stone-400  bg-slate-500 border-2 text-zinc-50 -ml-2 mb-2 w-7 h-7 rounded-full"
                    >
                        0
                    </div>
                </div>
            </div>
        </Link>
    )
}
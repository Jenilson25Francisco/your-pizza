import { IconHeartFilled } from "@tabler/icons-react"

export const Footer = () => {
    return (
        <footer className="px-5 py-2 bg-orange-400 overflow-x-hidden">
            <div className="flex justify-center flex-col items-center">
                <p className="font-semibold text-zinc-700 text-center text-sm">
                    zanguetsuinc &copy; {new Date().getFullYear()} todos os direitos reservados
                </p>
                <div className="flex items-center">
                    <p className="flex gap-2 font-semibold text-center text-zinc-700">
                        Desenvolvido com <IconHeartFilled className="text-red-600" /> por Jenilson Francisco
                    </p>
                </div>
            </div>
        </footer>
    )
}
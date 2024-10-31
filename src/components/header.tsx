import Image from "next/image"

export const Header = () => {
    return (
        <header
            className="fixed z-40 top-0 right-0 left-0 text-center shadow-2xl"
            style={{
                backgroundImage: "url(/bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px"
            }}
        >
            <div className="flex justify-center items-center text-center mt-4 space-y-4">
                <div>
                    <Image
                        src="/images.png"
                        width={130}
                        height={130}
                        alt="logo"
                        className="rounded-full mx-auto"
                    />
                    <h1 className="text-3xl font-bold text-zinc-50">Your Pizza</h1>
                    <p className="text-emerald-300 font-bold">A melhor pizzaria da cidade</p>
                    <div className="border-t py-1 pb-2 space-y-2">
                        <h2 className="text-zinc-50">Horário de atendimento</h2>
                        <span className="bg-zinc-600 py-1 px-2 rounded-full text-zinc-50">Sabado á Domingo das 18:00 às 00:00</span>
                    </div>
                </div>

            </div>
        </header>
    )
}
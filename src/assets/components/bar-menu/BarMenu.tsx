
export function BarMenu(){
    return(
        <header className="absolute w-[inherit] grid grid-cols-2 top-0">

            <article className="flex m-4 items-center">
                <div className="p-2 text-white bg-black normal-family-font">W</div>
                <section><p className="text-lg normal-family-font ml-2">WHY.NOT?</p></section>
            </article>

            <nav>
                <ul className="flex justify-end">
                    <li className="m-4 text-lg normal-family-font">Inicio</li>
                    <li className="m-4 text-lg normal-family-font">Secciones</li>
                    <li className="m-4 text-lg normal-family-font">Productos</li>
                    <li className="m-4 text-lg normal-family-font">Ofertas</li>
                    <li className="m-4 text-lg normal-family-font">Nosotros</li>
                    <li className="m-4 text-lg normal-family-font">Contactanos</li>
                </ul>
            </nav>
        </header>
    )
}
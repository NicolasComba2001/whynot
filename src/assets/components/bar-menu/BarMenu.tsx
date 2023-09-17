import React from 'react';

export function BarMenu(){
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    return(
        <header className="absolute w-full grid grid-cols-2 top-0">

            <article className="flex m-4 items-center z-[200]">
                <div className="p-2 text-white bg-black normal-family-font">W</div>
                <section><p className="text-lg normal-family-font ml-2">WHY.NOT?</p></section>
                <button onClick={()=>setOpenMenu(state => !state)} className='ml-4 xl:hidden'>X</button>
            </article>

            <nav className={`fixed ${openMenu ? 'left-0' : 'left-[-100%]'} w-screen h-screen bg-orange-400 pt-20 z-[100]
            xl:relative
            xl:w-full
            xl:pt-0
            xl:h-auto
            xl:bg-transparent
            xl:left-0`}>
                <ul className="flex flex-col justify-end
                xl:flex-row">
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Inicio</li>
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Secciones</li>
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Productos</li>
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Ofertas</li>
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Nosotros</li>
                    <li className="m-4 text-2xl normal-family-font cursor-pointer">Contactanos</li>
                </ul>
            </nav>
        </header>
    )
}
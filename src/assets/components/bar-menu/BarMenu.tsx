import React from 'react';

export function BarMenu(){
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    return(
        <header className="absolute w-full grid grid-cols-2 top-0">

            <article className="flex m-4 items-center z-[200]">
                <div className="p-2 text-white bg-black normal-family-font">W</div>
                <section><p className="text-lg normal-family-font ml-2">WHY.NOT?</p></section>
                <button onClick={()=>setOpenMenu(state => !state)} className='ml-4'>X</button>
            </article>

            <nav className={`fixed ${openMenu ? 'left-0' : 'left-[-100%]'} w-screen h-screen bg-orange-400 pt-20 z-[100]`}>
                <ul className="flex flex-col justify-end">
                    <li className="m-4 text-2xl normal-family-font">Inicio</li>
                    <li className="m-4 text-2xl normal-family-font">Secciones</li>
                    <li className="m-4 text-2xl normal-family-font">Productos</li>
                    <li className="m-4 text-2xl normal-family-font">Ofertas</li>
                    <li className="m-4 text-2xl normal-family-font">Nosotros</li>
                    <li className="m-4 text-2xl normal-family-font">Contactanos</li>
                </ul>
            </nav>
        </header>
    )
}
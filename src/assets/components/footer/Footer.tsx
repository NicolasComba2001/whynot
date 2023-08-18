
export default function Footer(){
    return(
        <footer className="grid grid-cols-2">
            <img src="https://images.pexels.com/photos/5868124/pexels-photo-5868124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <section>

               <section className="grid grid-cols-autoFit place-items">

                <article>
                        <strong>Categorias</strong>
                        <ul>
                            <li>Remeras</li>
                            <li>Pantalones</li>
                            <li>Sweaters</li>
                            <li>Camperas</li>
                        </ul>
                </article>
                <article>
                        <strong>Nostros</strong>
                        <ul>
                            <li>Contacto</li>
                            <li>Correo</li>
                            <li>Ubicacion</li>
                            <li>Blog</li>
                        </ul>
                </article>

               </section>

               {/* redes */}
               <article>
                <div></div>
                <div></div>
                <div></div>
               </article>

            </section>
        </footer>
    )
}
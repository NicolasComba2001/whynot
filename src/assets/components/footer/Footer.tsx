import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {  } from 'react-router-dom';

export default function Footer(){
    return(
    <footer className="mt-12 bg-[#1a1a1a] max-h-max w">
        <section className="flex flex-col m-auto p-8 h-full lg:w-[80%]">
            <article className="w-full flex flex-col">
                <div></div>
                <p className="normal-family-font text-white w-2/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, cum!</p>
                <article className='mt-8'>
                    <a href="" className='inline-block' target='_blank' rel='noreferrer'>
                        <InstagramIcon style={{width: 40, height: 40}} className="underline border-b-2 border-orange-600 p-2 bg-white rounded"/>
                    </a>
                    <a href="" className='inline-block' target='_blank' rel='noreferrer'>
                        <FacebookIcon style={{width: 40, height: 40}} className='ml-4 mr-4 underline border-b-2 border-orange-600 p-2 bg-white rounded'/>
                    </a>
                    <a href="" className='inline-block' target='_blank' rel='noreferrer'>
                        <WhatsAppIcon style={{width: 40, height: 40}} className="underline border-b-2 border-orange-600 p-2 bg-white rounded"/>
                    </a>
                </article>
            </article>

            <section className='mt-8'>
               <section className="grid grid-cols-autoFit gap-4 w-full">

                <article>
                        <strong className="text-white tracking-wider underline   font-normal">Categorias</strong>
                        <ul className="mt-2">
                            <li className="text-white normal-family-font">
                                <a href="#">Remeras</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Camperas</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Sweaters</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Pantalones</a>
                            </li>
                        </ul>
                </article>
                <article>
                        <strong className="text-white tracking-wider underline   font-normal">Nostros</strong>
                        <ul className="mt-2">
                            <li className="text-white normal-family-font">
                                <a href="#">Ubicacion</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Tiendas</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Historia</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                </article>

                <article>
                        <strong className="text-white tracking-wider underline   font-normal">Informacion</strong>
                        <ul className="mt-2">
                            <li className="text-white normal-family-font">
                                <a href="#">Ofertas</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Proximamente</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Lo mas vendido</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Lavados</a>
                            </li>
                        </ul>
                </article>

                <article>
                        <strong className="text-white tracking-wider underline   font-normal">Preguntas</strong>
                        <ul className="mt-2">
                            <li className="text-white normal-family-font">
                                <a href="#">Cotizaciones</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Vende tu ropa</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Reembolsos</a>
                            </li>
                            <li className="text-white normal-family-font">
                                <a href="#">Precios</a>
                            </li>
                        </ul>
                </article>

               </section>
            </section>

        </section>
    </footer>
    )
}
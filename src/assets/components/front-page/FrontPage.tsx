import frontPageImg from '../../all-images/image-of-frontPage/frontPageImg.jpg';
import { BarMenu } from '../bar-menu/BarMenu';


export function FrontPage(){
    return(
        <section className='relative w-full'>


            <section className='grid grid-cols-autoFit md:place-items-none place-items-center gap-8 h-screen'>
            <BarMenu />

                <section className='h-[65%] w-full'>
                    <article>
                        <p className='text-8xl leading-normal'>CHANGE YOUR MIND</p>
                        <p className='text-8xl leading-normal'>LOVE YOURSELF</p>
                        <p className='text-8xl leading-normal'>CHOOSE WELL</p>
                        <p className='text-8xl leading-normal underline decoration-orange-500'>BUY NOW!</p>
                    </article>
                    <button className='bg-[#ceb89e] mt-8 p-4 rounded-md text-base normal-family-font float-right'>Conoce nuestra marca</button>
                </section>
                <figure className='bg-no-repeat bg-right w-full h-full bg-contain' style={{backgroundImage: `url(${frontPageImg})`}}>
                </figure>

            </section>

        </section>
    )
}
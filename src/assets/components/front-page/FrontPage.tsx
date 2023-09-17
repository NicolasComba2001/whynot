import frontPageImg from '../../all-images/image-of-frontPage/frontPageImg.jpg';
import { BarMenu } from '../bar-menu/BarMenu';


export default function FrontPage(){
    return(
        <section className='relative w-full'>

            <section className='grid grid-cols-autoFit place-items-center gap-8 
            md:h-[70vh] 
            md:place-items-none 
            lg:h-screen'>
            <BarMenu />

                <section className='pt-20 pl-4 pr-4 w-full 
                xl:h-[65%]'>
                    <article>
                        <p className='text-5xl leading-normal 
                        xl:text-6xl 
                        xl:leading-normal 
                        2xl:text-8xl 
                        2xl:leading-normal'>CHANGE YOUR MIND</p>
                        <p className='text-5xl leading-normal 
                        xl:text-6xl 
                        xl:leading-normal 
                        2xl:text-8xl 
                        2xl:leading-normal'>LOVE YOURSELF</p>
                        <p className='text-5xl leading-normal 
                        xl:text-6xl 
                        xl:leading-normal 
                        2xl:text-8xl 
                        2xl:leading-normal'>CHOOSE WELL</p>
                        <p className='text-5xl leading-normal underline decoration-orange-500 
                        xl:text-6xl 
                        xl:leading-normal 
                        2xl:text-8xl 
                        2xl:leading-normal'>BUY NOW!</p>
                    </article>
                    <button className='bg-[#ceb89e] mt-8 p-4 rounded-md text-base normal-family-font float-right'>Conoce nuestra marca</button>
                </section>
                <figure className='bg-no-repeat bg-right w-full h-[500px] bg-contain bg-image-url-[${frontPageImg}]
                md:h-full' style={{backgroundImage: `url(${frontPageImg})`}}>
                </figure>

            </section>

        </section>
    )
}
import frontPageImg from '../../all-images/image-of-frontPage/frontPageImg.jpg';
import { BarMenu } from '../bar-menu/BarMenu';


export function FrontPage(){
    return(
        <section className='relative'>


            <section className='grid grid-cols-autoFit md:place-items-none place-items-center gap-8 h-screen  w-[90%] m-auto'>
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
                <figure style={{
                    backgroundImage: `url(${frontPageImg})`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    backgroundSize: 'contain'
                }}>
                    {/* <img src={frontPageImg} className='w-full h-full' alt="hombre modelando una remera, negra lisa." /> */}
                </figure>

            </section>

        </section>
    )
}
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Benefits(){
    return(
        <section className='flex gap-4 mt-12 place-items-center'>
            <article className='w-[250px] p-4 flex flex-col justify-center  border-l-2 border-orange-200'>
                <div className='mb-4'><LocalShippingIcon sx={{fontSize: "2em", color: "#ffff"}}/></div>
                <p className='normal-family-font text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique!</p>
            </article>

            <article className='w-[250px] p-4 flex flex-col justify-center border-l-2 border-orange-200'>
                <div className='mb-4'><CurrencyExchangeIcon sx={{fontSize: "2em", color: "#ffff"}}/></div>
                <p className='normal-family-font text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique!</p>
            </article>

            <article className='w-[250px] p-4 flex flex-col justify-center border-l-2 border-orange-200'>
                <div className='mb-4'><WhatsAppIcon sx={{fontSize: "2em", color: "#ffff"}}/></div>
                <p className='normal-family-font text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique!</p>
            </article>
        </section>
    )
}
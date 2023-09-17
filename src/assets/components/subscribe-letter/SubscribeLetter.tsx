import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export default function SubscribeLetter(){
    return(
        <section className="flex h-[40vh] bg-orange-400 mt-12 p-4 justify-center items-center
        lg:h-[60vh]">
            <section className='flex flex-col justify-center items-center
                md:flex-row'>
                <article className="mb-8 
                md:w-2/4
                md:mb-0">
                    <p className="text-white text-2xl text-center 
                    md:text-left
                    md:text-4xl">Put your hands first at our premium and limited products</p>
                </article>
                <article className="flex flex-col justify-center items-center ml-4 
                md:w-2/4
                lg:ml-28">
                    <p className='mb-2 text-white normal-family-font'>Conoce todas las novedades!</p>
                    <input type="text" className="rounded p-4 outline-none w-full" placeholder='julietwhynot@outlook.es...'/>
                    <button className="bg-white rounded p-2 mt-4 w-full"><span className='mr-2'>Subscribirse</span> <MarkEmailUnreadIcon/> </button>
                </article>
            </section>
        </section>
    )
}
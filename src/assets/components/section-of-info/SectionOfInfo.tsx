
export default function SectionOfInfo(){
    return(
        <section className="m-auto p-12 grid grid-cols-autoFit place-items-center w-[70%]">
            <figure className="flex justify-end">
                <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-[450px] h-[450px] rounded p-2 border"/>
            </figure>
            <article className="ml-4">
                <h2 className="text-white text-5xl leading-normal normal-family-font">Find out about the sales at your local shop</h2>
                <button className="mt-12 bg-orange-400 p-4 w-[150px] text-black rounded">NUEVAS OFERTAS</button>
            </article>
        </section>
    )
}
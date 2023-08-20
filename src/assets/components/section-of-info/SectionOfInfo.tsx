import Benefits from "../benefits/Benefits";

export default function SectionOfInfo(){
    return(
        <>
            <section className="m-auto p-12 flex justify-center items-center w-full bg-[#1a1a1a] mt-20">
                <figure className="flex justify-center w-2/4 rounded">
                    <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-[450px] h-[450px] rounded p-2 border"/>
                </figure>
                <article className="ml-20 w-2/4">
                    <h2 className="text-white text-5xl leading-normal">Find out about the sales at your local shop</h2>
                    <Benefits/>
                    <button className="mt-12 bg-orange-400 p-4 w-[150px] text-black rounded">NUEVAS OFERTAS</button>
                </article>
            </section>
        </>
    )
}
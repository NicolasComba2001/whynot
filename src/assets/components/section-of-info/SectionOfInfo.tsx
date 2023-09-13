import Benefits from "../benefits/Benefits";

export default function SectionOfInfo(){
    return(
        <>
            <section className="m-auto flex flex-col justify-center items-center w-full bg-[#1a1a1a] mt-20">
                <figure className="flex justify-center w-[350px] h-[350px] p-8 rounded">
                    <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full h-full rounded p-2 border"/>
                </figure>
                <article className="flex flex-col p-4">
                    <h2 className="text-white text-4xl leading-normal">Find out about the sales at your local shop</h2>
                    <Benefits/>
                    <button className="mt-12 mb-4 bg-orange-400 p-4 w-[150px] text-black rounded">NUEVAS OFERTAS</button>
                </article>
            </section>
        </>
    )
}
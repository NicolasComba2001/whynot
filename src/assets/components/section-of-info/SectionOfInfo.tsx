import Benefits from "../benefits/Benefits";

export default function SectionOfInfo(){
    return(
        <>
            <section className="m-auto flex flex-col justify-center items-center w-full bg-[#1a1a1a] mt-20
            2xl:flex-row">
                <figure className="flex justify-center w-[350px] h-[350px] p-8 rounded relative
                2xl:w-[40%]
                2xl:h-full">
                    <img src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full h-full rounded p-2 border hidden absolute bottom-0
                    md:block 
                    md:translate-x-[-210px] 
                    md:rotate-[-14deg] 
                    md:w-2/4 
                    md:h-2/4
                    2xl:w-[180px]
                    2xl:h-[180px]
                    2xl:bottom-[10px]"/>
                    <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full h-full rounded p-2 border
                    2xl:w-[300px]
                    2xl:h-[300px]"/>
                    <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full rounded p-2 border hidden absolute bottom-0
                    md:block 
                    md:translate-x-[210px] 
                    md:rotate-[14deg] 
                    md:w-2/4 
                    md:h-2/4
                    2xl:w-[180px]
                    2xl:h-[180px]
                    2xl:bottom-[10px]"/>
                </figure>
                <article className="flex flex-col p-4 w-full justify-center items-center mt-2
                2xl:w-[40%]">
                    <h2 className="text-white text-4xl leading-normal">Find out about the sales at your local shop</h2>
                    <Benefits/>
                    <button className="mt-12 mb-4 bg-orange-400 p-4 w-[150px] text-black rounded">NUEVAS OFERTAS</button>
                </article>
            </section>
        </>
    )
}
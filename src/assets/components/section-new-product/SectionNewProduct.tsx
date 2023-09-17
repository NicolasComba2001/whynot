export default function SectionNewProduct(){
    return(
        <section className="w-full bg-[#1a1a1a] mt-20 h-[600px] bg-no-repeat bg-center bg-cover relative p-4
        lg:w-[80%]
        lg:mt-12
        lg:m-auto" 
        style={{backgroundImage: "url('https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
               <article className="top-5 left-5 absolute">
                    <p className="w-max text-2xl text-white">Discover our shoes New world—</p>
               </article>
               <button className="w-max absolute bottom-5 right-5 rounded bg-[#fb923c] p-4">Encuentra ahora</button>
        </section>
    )
}